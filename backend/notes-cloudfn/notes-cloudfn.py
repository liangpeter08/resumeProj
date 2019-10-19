from os import getenv

from psycopg2 import OperationalError
from psycopg2.extras import RealDictCursor
from psycopg2.pool import SimpleConnectionPool
import json
from flask import abort
import datetime

CONNECTION_NAME = getenv(
  'INSTANCE_CONNECTION_NAME',
  '<YOUR INSTANCE CONNECTION NAME>')
DB_USER = getenv('POSTGRES_USER', '<YOUR DB USER>')
DB_PASSWORD = getenv('POSTGRES_PASSWORD', '<YOUR DB PASSWORD>')
DB_NAME = getenv('POSTGRES_DATABASE', '<YOUR DB NAME>')

pg_config = {
  'user': DB_USER,
  'password': DB_PASSWORD,
  'dbname': DB_NAME
}

# Connection pools reuse connections between invocations,
# and handle dropped or expired connections automatically.
pg_pool = None
table_name = 'user_notes'
open_conn = 10

def __connect(host):
    """
    Helper function to connect to Postgres
    """
    global pg_pool
    pg_config['host'] = host
    pg_pool = SimpleConnectionPool(1, open_conn, **pg_config)


def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()


def postgres(query, method):
    global pg_pool

    if not pg_pool:
        try:
            __connect(f'/cloudsql/{CONNECTION_NAME}')
        except OperationalError:
            __connect('localhost')
    # Remember to close SQL resources declared while running this function.
    # Keep any declared in global scope (e.g. pg_pool) for later reuse.
    with pg_pool.getconn() as conn:
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute(query)
        if method == 'GET' and cursor.rowcount > 0:
            results = cursor.fetchall()
            tmp = json.dumps(results, default=myconverter)
            print(str(tmp))
            return str(tmp)
        else:
            conn.commit()
            return json.dumps({"rowCount": cursor.rowcount})
        pg_pool.putconn(conn)


def getNotes(request):
    print('get Notes')
    # use email
    if request.args and 'email' in request.args:
        get_query = "SELECT * FROM {} WHERE email='{}'".format(table_name, str(request.args.get('email').strip('""')))
        print(get_query)
        return postgres(get_query, request.method)

# "UPDATE user_notes SET version = version + 1, title = 'blah', content = 'rest', 
# allowed_email = '{"newSet" (always append self)}', last_modified = CURRENT_TIMESTAMP WHERE email='{}'"
def updateNote(request):
    print('update Note')
    request_json = request.get_json(silent=True)
    columns = []
    if request_json:
        for prop in request_json:
            if prop == 'title' or prop == 'content':
              columns.append(prop + ' = ' + "'" + request_json[prop] + "'")
            elif prop == 'allowed_email':
              # note: frontend can remove all access
              columns.append(prop + ' = ' + "'{" + str(request_json[prop]).strip('[]') + "}'")
    else: 
        return abort(400)

    # update version
    columns.append('version = version + 1')

    query = "UPDATE {} SET {} WHERE email='{}' AND ".format(table_name, ', '.join(columns), request_json['email'], request_json['note_id'])
    print(query)
    return postgres(query, request.method)

# delete the specific note
def deleteNote(request):
    print('delete Note')
    request_json = request.get_json(silent=True)
    # update version
    columns.append('version = version + 1')

    query = "DELETE FROM {} WHERE note_id='{}' AND ".format(table_name, request_json['note_id'])
    print(query)
    return postgres(query, request.method)


# INSERT INTO user_notes (google_id,email,title,content,created_on,last_modified,version,allowed_email) VALUES
# ('10001', 'test@gmail.com', 'random', 'first note', CURRENT_TIMESTAMP, NULL, 0, '{"test@gmail.com"}');
def createNote(request):
    print('create note')
    prefix = "INSERT INTO {} (google_id,email,title,content,version,allowed_email,created_on,last_modified) VALUES".format(table_name)
    req = request.get_json(silent=True)
    print(req)
    required = ['google_id', 'email', 'title', 'content', 'allowed_email']
    if not req:
      abort(400)

    for param in required:
      if not param in req:
        return abort(400)
    suffix =  ', '.join("'{0}'".format(w) for w in [req["google_id"],req["email"],req["title"],req["content"], 0, req["allowed_email"]])
    suffix = suffix + ' , CURRENT_TIMESTAMP' + ' , CURRENT_TIMESTAMP'
    query = prefix + '(' + suffix + ')'
    print(query)
    return postgres(query, request.method)

def notes(request):
    # TODO: add user authentication
    if request.method == 'GET':
        return getNotes(request)
    elif request.method == 'PUT':
        return updateNote(request)
    elif request.method == 'POST':
        return createNote(request)
    elif request.method == 'DELETE':
        return deleteNote(request)
    else:
        return abort(405)


