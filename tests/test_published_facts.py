import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class PublishedFactsTests(unittest.TestCase):
    def test_published_facts_have_independent_review_and_evidence(self):
        facts = json.loads((ROOT / "web/facts.json").read_text(encoding="utf-8"))
        self.assertIsInstance(facts, list)
        ids = set()
        for fact in facts:
            self.assertEqual(fact.get("status"), "verified")
            self.assertTrue(fact.get("source_id"))
            self.assertTrue(fact.get("reviewer_id"))
            self.assertTrue(fact.get("researcher_id"))
            self.assertNotEqual(fact["reviewer_id"], fact["researcher_id"])
            self.assertTrue(fact.get("club_id"))
            self.assertIn("value", fact)
            self.assertTrue(1971 <= fact.get("season", 0) <= 2100)
            self.assertTrue(fact.get("unit"))
            self.assertTrue(fact.get("metric"))
            self.assertTrue(fact.get("evidence_locator"))
            self.assertNotIn(fact.get("record_id"), ids)
            ids.add(fact.get("record_id"))

if __name__ == "__main__":
    unittest.main()
