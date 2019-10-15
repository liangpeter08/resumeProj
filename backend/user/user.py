from os import getenv

from psycopg2 import OperationalError
from psycopg2.pool import SimpleConnectionPool

# TODO(developer): specify SQL connection details
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


def __connect(host):
    """
    Helper function to connect to Postgres
    """
    global pg_pool
    pg_config['host'] = host
    pg_pool = SimpleConnectionPool(1, 1, **pg_config)


def postgres():
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
        cursor.execute('SELECT NOW() as now')
        results = cursor.fetchone()
        pg_pool.putconn(conn)
        return str(results[0])

def getUser(request):
    print('create user')


def updateUser(request):
    print('update user')

def createUser(request):
    print('create user')

def user(request):
    if request.method == 'GET':
        getUser(request)
    elif request.method == 'PUT':
        updateUser(request)
    elif request.method == 'POST':
        createUser(request)
    else:
        return abort(405)


