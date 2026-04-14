import os
from pathlib import Path
from dotenv import load_dotenv

APP_DIR = Path(__file__).resolve().parent
BACKEND_DIR = APP_DIR.parent
PROJECT_ROOT = BACKEND_DIR.parent

# 先加载项目根目录 .env（news）
load_dotenv(PROJECT_ROOT / ".env")

# 再加载 backend 目录 .env（baidu, deepseek）
load_dotenv(BACKEND_DIR / ".env", override=True)

NEWS_API_KEY = os.getenv("NEWSDATA_API_KEY", "").strip()
NEWS_API_URL = "https://newsdata.io/api/1/crypto"
NEWS_LANGUAGE = os.getenv("NEWSDATA_LANGUAGE", "").strip()
NEWS_PAGE = os.getenv("NEWSDATA_PAGE", "").strip()
NEWS_MAX_RESULTS = int(os.getenv("NEWSDATA_MAX_RESULTS", "9"))

BAIDU_TRANSLATE_APP_ID = os.getenv("BAIDU_TRANSLATE_APP_ID", "").strip()
BAIDU_TRANSLATE_APP_KEY = os.getenv("BAIDU_TRANSLATE_APP_KEY", "").strip()
BAIDU_TRANSLATE_URL = "https://fanyi-api.baidu.com/api/trans/vip/translate"