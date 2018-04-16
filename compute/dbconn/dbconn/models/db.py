from orator import DatabaseManager
from os import getenv

config = {
    'default': 'postgres',
    'postgres': {
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

db = DatabaseManager(config)
