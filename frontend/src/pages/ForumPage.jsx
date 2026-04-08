import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import SectionHeader from "../components/SectionHeader";

const initialForm = { author: "", title: "", content: "", category: "General Discussion" };
const categories = [
  "All",
  "General Discussion",
  "Beginner Questions",
  "Industry Applications",
  "Research & Academic Discussion",
  "Merchant Collaboration",
];

export default function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  function loadPosts() {
    api.getForumPosts().then(setPosts).catch(console.error);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory = category === "All" || post.category === category;
      const q = query.toLowerCase();
      const matchQuery = !q || post.title.toLowerCase().includes(q) || post.content.toLowerCase().includes(q) || post.author.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [posts, query, category]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await api.createForumPost(form);
    setForm(initialForm);
    loadPosts();
  }

  async function handleLike(postId) {
    await api.likePost(postId);
    loadPosts();
  }

  return (
    <>
      <section className="hero">
        <div className="badge">Community Forum</div>
        <h1 className="page-title">Connect industry, academia, merchants, customers, and everyday users.</h1>
        <p className="page-subtitle">The forum now supports post creation, category filtering, keyword search, likes, and comments.</p>
      </section>

      <section className="section">
        <SectionHeader title="Create a post" />
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label className="label">Author</label>
              <input className="input" name="author" value={form.author} onChange={handleChange} required />
            </div>
            <div>
              <label className="label">Category</label>
              <select className="select" name="category" value={form.category} onChange={handleChange}>
                {categories.filter((x) => x !== "All").map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <label className="label">Title</label>
            <input className="input" name="title" value={form.title} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label className="label">Content</label>
            <textarea className="textarea" name="content" value={form.content} onChange={handleChange} required />
          </div>
          <div className="button-row">
            <button className="button" type="submit">Post</button>
          </div>
        </form>
      </section>

      <section className="section">
        <SectionHeader title="Browse discussions" />
        <div className="form-grid" style={{ marginBottom: "1rem" }}>
          <div>
            <label className="label">Search</label>
            <input className="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title, content, author" />
          </div>
          <div>
            <label className="label">Category</label>
            <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>

        {filteredPosts.length === 0 ? <div className="empty-state">No posts matched your filter.</div> : null}
        {filteredPosts.map((post) => (
          <div key={post.id} className="card" style={{ marginBottom: "1rem" }}>
            <Link className="post-link" to={`/forum/post/${post.id}`}>{post.title}</Link>
            <div className="post-meta">{post.category} · by {post.author} · {post.created_at}</div>
            <p className="muted">{post.content.slice(0, 180)}{post.content.length > 180 ? "..." : ""}</p>
            <div className="button-row">
              <button className="button secondary" type="button" onClick={() => handleLike(post.id)}>👍 Like ({post.likes || 0})</button>
              <Link className="button ghost" to={`/forum/post/${post.id}`}>Open discussion ({post.comments.length} comments)</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
