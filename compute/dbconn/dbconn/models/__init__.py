from orator import Model
from db import db

Model.set_connection_resolver(db)
