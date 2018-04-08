from example.example import get_uuid


def test_it_returns_a_uuid_v4():
    result = get_uuid()
    assert len(result) == 36
