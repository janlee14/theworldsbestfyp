import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parents[2]
load_dotenv(BASE_DIR / '.env')

NEWS_API_KEY = os.getenv('NEWSDATA_API_KEY', '').strip()
NEWS_API_URL = 'https://newsdata.io/api/1/crypto'
NEWS_LANGUAGE = os.getenv('NEWSDATA_LANGUAGE', '').strip()
NEWS_PAGE = os.getenv('NEWSDATA_PAGE', '').strip()
NEWS_MAX_RESULTS = int(os.getenv('NEWSDATA_MAX_RESULTS', '9'))
