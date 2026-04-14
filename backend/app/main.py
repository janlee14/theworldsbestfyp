from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.routers import news, industries, reports, forum, translate

app = FastAPI(title="Non-Financial RWA Hub API", version="0.2.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)# test test

# news.py 里已经有 prefix="/api/news"
app.include_router(news.router)
app.include_router(translate.router)

# 这些 router 继续在这里加 prefix
app.include_router(industries.router, prefix="/api/industries", tags=["industries"])
app.include_router(reports.router, prefix="/api/reports", tags=["reports"])
app.include_router(forum.router, prefix="/api/forum", tags=["forum"])

DIST_DIR = Path(__file__).resolve().parents[2] / "frontend" / "dist"
ASSETS_DIR = DIST_DIR / "assets"

if ASSETS_DIR.exists():
    app.mount("/assets", StaticFiles(directory=str(ASSETS_DIR)), name="assets")


@app.get("/api/health")
def health():
    return {"message": "Non-Financial RWA Hub API is running."}


@app.get("/")
def serve_root():
    index_file = DIST_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "Frontend build not found. Run frontend build first."}


@app.get("/{full_path:path}")
def serve_frontend(full_path: str):
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="API route not found")

    index_file = DIST_DIR / "index.html"
    requested = DIST_DIR / full_path

    if full_path and requested.exists() and requested.is_file():
        return FileResponse(requested)

    if index_file.exists():
        return FileResponse(index_file)

    return {"message": "Frontend build not found. Run frontend build first."}