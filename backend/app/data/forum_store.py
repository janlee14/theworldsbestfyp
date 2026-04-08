from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path

STORE_PATH = Path(__file__).resolve().parent / "forum_store.json"

DEFAULT_POSTS = [
    {
        "id": 1,
        "author": "Admin",
        "title": "What is the best first pilot for non-financial RWA?",
        "content": "For an MVP platform, which industry do you think is the most suitable for the first real pilot and why?",
        "category": "General Discussion",
        "created_at": "2026-04-08 10:00",
        "likes": 3,
        "comments": [
            {
                "id": 1,
                "author": "Researcher A",
                "content": "Ticketing is a strong candidate because the access right is clear and users easily understand the benefit.",
                "created_at": "2026-04-08 10:15",
            },
            {
                "id": 2,
                "author": "Merchant User",
                "content": "I also think tea and baijiu are interesting because provenance is directly linked to trust and pricing.",
                "created_at": "2026-04-08 11:00",
            },
        ],
    }
]


def now_str() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M")


def _ensure_store() -> None:
    if not STORE_PATH.exists():
        STORE_PATH.write_text(json.dumps(DEFAULT_POSTS, ensure_ascii=False, indent=2), encoding="utf-8")


def load_posts():
    _ensure_store()
    return json.loads(STORE_PATH.read_text(encoding="utf-8"))


def save_posts(posts):
    STORE_PATH.write_text(json.dumps(posts, ensure_ascii=False, indent=2), encoding="utf-8")
