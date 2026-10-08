import json, unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class TestCatalog(unittest.TestCase):
    def test_60_preliminary_clubs(self):
        clubs = json.loads((ROOT/'web/clubs.json').read_text(encoding='utf-8'))
        self.assertEqual(len(clubs), 60)
        self.assertEqual(len({c['club_id'] for c in clubs}), 60)
        for division in 'ABC':
            self.assertEqual(sum(c['reference_division']==division for c in clubs), 20)

    def test_no_historical_data_seeded(self):
        script = (ROOT/'web/app.js').read_text(encoding='utf-8')
        self.assertIn("status=eq.verified", script)
        self.assertIn("facts=[]", script)
        schema = (ROOT/'db/001_schema.sql').read_text(encoding='utf-8')
        self.assertIn("reviewer_independent", schema)
        self.assertIn("enable row level security", schema)

if __name__ == '__main__':
    unittest.main()
