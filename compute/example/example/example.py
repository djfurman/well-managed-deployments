"""Test Lambda function to return a GUID

Returns: str
    UUIDv4 -- returns a stringified UUID-4
"""
from uuid import uuid4


def get_uuid():
    return str(uuid4())


def fetch_uuid(event, context):
    return {'uuid': get_uuid()}
