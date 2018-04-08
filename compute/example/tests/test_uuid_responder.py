from example.example import get_uuid


def test_it_returns_a_uuid_v4():
    result = get_uuid()
    assert len(result) == 36


def test_it_returns_different_values():
    result_1 = get_uuid()
    result_2 = get_uuid()
    assert result_1 != result_2
