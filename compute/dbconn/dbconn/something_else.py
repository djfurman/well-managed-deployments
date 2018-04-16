from os import getenv

DATABASES = {
    'wmd': {
        'driver': 'postgres',
        'host': 'localhost',
        'database': 'wmd',
        'user': 'wmd_user',
        'password': getenv('DB_PASSWORD'),
        'prefix': '',
        'use_qmark': True,
        'log_queries': True
    }
}
