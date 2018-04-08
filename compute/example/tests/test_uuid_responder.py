import unittest
from example.example import get_uuid


class TddUuidExample(unittest.TestCase):
    def test_it_returns_a_uuid_v4(self):
        result = get_uuid()
        self.assertEqual(36, len(result))

if __name__ == '__main__':
    unittest.main()
