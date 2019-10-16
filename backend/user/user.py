from os import getenv

from psycopg2 import OperationalError
from psycopg2.pool import SimpleConnectionPool
import json
from flask import abort

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
table_name = 'user_account'
open_conn = 10

def __connect(host):
    """
    Helper function to connect to Postgres
    """
    global pg_pool
    pg_config['host'] = host
    pg_pool = SimpleConnectionPool(1, open_conn, **pg_config)


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
        cursor = conn.cursor()
        cursor.execute(query)
        if method == 'GET':
            results = cursor.fetchall()
            print(str(results[0]))
            return str(results[0])
        else:
            conn.commit()
            return json.dumps({"rowCount": cursor.rowcount})
        pg_pool.putconn(conn)


def getUser(request):
    print('create user')
    if request.args and 'google_id' in request.args:
        get_query = "SELECT * FROM {} WHERE google_id='{}'".format(table_name, str(request.args.get('google_id')))
        print(get_query)
        return postgres(get_query, request.method)


def updateUser(request):
    print('update user')
    request_json = request.get_json(silent=True)
    columns = []
    if request_json:
        for prop in request_json:
            if prop == 'google_id':
                continue
            columns.append(prop + ' = ' + "'" + request_json[prop] + "'")
    else: 
        return abort(400)
    query = "UPDATE {} SET {} WHERE google_id='{}'".format(table_name, ', '.join(columns), request_json['google_id'])
    print(query)
    return postgres(query, request.method)


def createUser(request):
    print('create user')
    prefix = "INSERT INTO {} (google_id,family_name,given_name,image_url,email, created_on) VALUES".format(table_name)
    req = request.get_json(silent=True)
    if not req or not "google_id" in req or not "email" in req:
        return abort(400)
    suffix = ', '.join([req["google_id"],req["family_name"],req["given_name"],req["image_url"],req["email"], "CURRENT_TIMESTAMP"])
    query = prefix + '(' + suffix + ')'
    print(query)
    return postgres(query, request.method)

def user(request):
    # TODO: add user authentication
    if request.method == 'GET':
        return getUser(request)
    elif request.method == 'PUT':
        return updateUser(request)
    elif request.method == 'POST':
        return createUser(request)
    else:
        return abort(405)


