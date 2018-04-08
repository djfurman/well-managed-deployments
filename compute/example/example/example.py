"""
Test Lambda function to return a GUID
"""
from uuid import uuid4


def get_uuid():
    return str(uuid4())


def fetch_uuid(event, context):
    return {'uuid': get_uuid()}
