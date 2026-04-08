from fastapi import APIRouter, HTTPException
from app.data.forum_store import load_posts, save_posts, now_str
from app.schemas.forum import ForumPostCreate, CommentCreate

router = APIRouter()


@router.get("/posts")
def list_posts():
    posts = load_posts()
    return list(reversed(posts))


@router.post("/posts")
def create_post(payload: ForumPostCreate):
    posts = load_posts()
    new_post = {
        "id": (max((post["id"] for post in posts), default=0) + 1),
        "author": payload.author,
        "title": payload.title,
        "content": payload.content,
        "category": payload.category,
        "created_at": now_str(),
        "likes": 0,
        "comments": [],
    }
    posts.append(new_post)
    save_posts(posts)
    return new_post


@router.get("/posts/{post_id}")
def get_post(post_id: int):
    posts = load_posts()
    for post in posts:
        if post["id"] == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")


@router.post("/posts/{post_id}/comments")
def add_comment(post_id: int, payload: CommentCreate):
    posts = load_posts()
    for post in posts:
        if post["id"] == post_id:
            new_comment = {
                "id": len(post["comments"]) + 1,
                "author": payload.author,
                "content": payload.content,
                "created_at": now_str(),
            }
            post["comments"].append(new_comment)
            save_posts(posts)
            return new_comment
    raise HTTPException(status_code=404, detail="Post not found")


@router.post("/posts/{post_id}/like")
def like_post(post_id: int):
    posts = load_posts()
    for post in posts:
        if post["id"] == post_id:
            post["likes"] = post.get("likes", 0) + 1
            save_posts(posts)
            return {"likes": post["likes"]}
    raise HTTPException(status_code=404, detail="Post not found")
