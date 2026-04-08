import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import SectionHeader from "../components/SectionHeader";

export default function ForumPostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState({ author: "", content: "" });

  function loadPost() {
    api.getForumPost(postId).then(setPost).catch(console.error);
  }

  useEffect(() => {
    loadPost();
  }, [postId]);

  async function handleSubmit(event) {
    event.preventDefault();
    await api.createComment(postId, comment);
    setComment({ author: "", content: "" });
    loadPost();
  }

  async function handleLike() {
    await api.likePost(postId);
    loadPost();
  }

  if (!post) return <section className="section">Loading post...</section>;

  return (
    <>
      <section className="section">
        <div className="badge">{post.category}</div>
        <h1 className="page-title">{post.title}</h1>
        <div className="post-meta">by {post.author} · {post.created_at}</div>
        <p>{post.content}</p>
        <div className="button-row">
          <button className="button secondary" type="button" onClick={handleLike}>👍 Like ({post.likes || 0})</button>
          <div className="status-pill">{post.comments.length} comments</div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Comments" />
        {post.comments.length === 0 ? <p className="muted">No comments yet.</p> : null}
        {post.comments.map((item) => (
          <div className="card" key={item.id} style={{ marginBottom: "1rem" }}>
            <strong>{item.author}</strong>
            <div className="post-meta">{item.created_at}</div>
            <p>{item.content}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader title="Add a comment" />
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label className="label">Author</label>
              <input className="input" value={comment.author} onChange={(e) => setComment((p) => ({ ...p, author: e.target.value }))} required />
            </div>
          </div>
          <div className="form-row">
            <label className="label">Comment</label>
            <textarea className="textarea" value={comment.content} onChange={(e) => setComment((p) => ({ ...p, content: e.target.value }))} required />
          </div>
          <div className="button-row">
            <button className="button" type="submit">Reply</button>
          </div>
        </form>
      </section>
    </>
  );
}
