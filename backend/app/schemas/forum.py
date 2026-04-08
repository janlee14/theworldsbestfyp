from pydantic import BaseModel


class ForumPostCreate(BaseModel):
    author: str
    title: str
    content: str
    category: str


class CommentCreate(BaseModel):
    author: str
    content: str
