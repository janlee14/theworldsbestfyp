# Non-Financial RWA Hub

This version has been rebuilt so that the website content is actually filled into the frontend, and the FastAPI backend can also serve the built React site.

## What is included
- Home page with platform positioning and quick entry
- 3 learning pages:
  - `/rwa-industry-overview`
  - `/rwa-primitives`
  - `/non-financial-rwas`
- 5 research sub-pages:
  - Baijiu
  - Tea
  - Collectibles / Pop Toys
  - Gaming
  - General mechanism design guide
- Hard-coded news page
- AI-enabled report form
- Forum with create post / search / filter / like / comment

## Option A: easiest way (open the real site at localhost:8000)
### 1) Build the frontend
```bash
cd frontend
npm install
npm install react-markdown
npm run build
```

### 2) Start the backend
```bash
cd ../backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Then open:
- `http://127.0.0.1:8000`

You should now see the website itself, not just an API message.

## Option B: run frontend and backend separately for development
### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm install react-markdown
npm run dev
```

Then open:
- `http://127.0.0.1:5173`

The Vite dev server proxies `/api` to the backend automatically.

## API routes
- `GET /api/health`
- `GET /api/news`
- `GET /api/industries`
- `GET /api/industries/{industry_id}`
- `POST /api/reports/generate`
- `GET /api/forum/posts`
- `POST /api/forum/posts`
- `GET /api/forum/posts/{post_id}`
- `POST /api/forum/posts/{post_id}/comments`
- `POST /api/forum/posts/{post_id}/like`


## News API setup

The News page now loads live titles from the NewsData crypto endpoint through the backend.

1. Create `backend/.env`
2. Paste your key:

```env
NEWSDATA_API_KEY=your_newsdata_api_key_here
NEWSDATA_LANGUAGE=en
NEWSDATA_MAX_RESULTS=20
```

3. Restart the backend server

The frontend only calls `/api/news`, so your API key stays on the server side.
