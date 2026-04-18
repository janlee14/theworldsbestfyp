import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { api } from "../services/api";
import SectionHeader from "../components/SectionHeader";

const initialForm = { author: "", title: "", content: "", category: "General Discussion" };

const categoryValues = [
  "All",
  "General Discussion",
  "Beginner Questions",
  "Industry Applications",
  "Research & Academic Discussion",
  "Merchant Collaboration",
];

const forumText = {
  en: {
    heroBadge: "Community Forum",
    heroTitle: "Connect industry, academia, merchants, customers, and everyday users.",
    heroSubtitle:
      "The forum now supports post creation, category filtering, keyword search, likes, and comments.",
    createPost: "Create a post",
    browseDiscussions: "Browse discussions",
    author: "Author",
    category: "Category",
    title: "Title",
    content: "Content",
    post: "Post",
    search: "Search",
    searchPlaceholder: "Search title, content, author",
    noPosts: "No posts matched your filter.",
    by: "by",
    openDiscussion: "Open discussion",
    comments: "comments",
    like: "Like",
    categories: {
      All: "All",
      "General Discussion": "General Discussion",
      "Beginner Questions": "Beginner Questions",
      "Industry Applications": "Industry Applications",
      "Research & Academic Discussion": "Research & Academic Discussion",
      "Merchant Collaboration": "Merchant Collaboration",
    },
  },
  zh: {
    heroBadge: "社区论坛",
    heroTitle: "连接行业、学界、商家、消费者与普通用户。",
    heroSubtitle:
      "论坛目前支持发帖、分类筛选、关键词搜索、点赞和评论。",
    createPost: "发布帖子",
    browseDiscussions: "浏览讨论",
    author: "作者",
    category: "分类",
    title: "标题",
    content: "内容",
    post: "发布",
    search: "搜索",
    searchPlaceholder: "搜索标题、内容或作者",
    noPosts: "没有符合筛选条件的帖子。",
    by: "作者",
    openDiscussion: "打开讨论",
    comments: "条评论",
    like: "点赞",
    categories: {
      All: "全部",
      "General Discussion": "综合讨论",
      "Beginner Questions": "新手提问",
      "Industry Applications": "行业应用",
      "Research & Academic Discussion": "研究与学术讨论",
      "Merchant Collaboration": "商家合作",
    },
  },
};

export default function ForumPage() {
  const { language } = useI18n();
  const t = forumText[language] || forumText.en;

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
      const matchQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q);
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
        <div className="badge">{t.heroBadge}</div>
        <h1 className="page-title">{t.heroTitle}</h1>
        <p className="page-subtitle">{t.heroSubtitle}</p>
      </section>

      <section className="section">
        <SectionHeader title={t.createPost} />
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label className="label">{t.author}</label>
              <input className="input" name="author" value={form.author} onChange={handleChange} required />
            </div>
            <div>
              <label className="label">{t.category}</label>
              <select className="select" name="category" value={form.category} onChange={handleChange}>
                {categoryValues
                  .filter((x) => x !== "All")
                  .map((item) => (
                    <option key={item} value={item}>
                      {t.categories[item]}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <label className="label">{t.title}</label>
            <input className="input" name="title" value={form.title} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label className="label">{t.content}</label>
            <textarea className="textarea" name="content" value={form.content} onChange={handleChange} required />
          </div>

          <div className="button-row">
            <button className="button" type="submit">
              {t.post}
            </button>
          </div>
        </form>
      </section>

      <section className="section">
        <SectionHeader title={t.browseDiscussions} />
        <div className="form-grid" style={{ marginBottom: "1rem" }}>
          <div>
            <label className="label">{t.search}</label>
            <input
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
            />
          </div>
          <div>
            <label className="label">{t.category}</label>
            <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categoryValues.map((item) => (
                <option key={item} value={item}>
                  {t.categories[item]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredPosts.length === 0 ? <div className="empty-state">{t.noPosts}</div> : null}

        {filteredPosts.map((post) => (
          <div key={post.id} className="card" style={{ marginBottom: "1rem" }}>
            <Link className="post-link" to={`/forum/post/${post.id}`}>
              {post.title}
            </Link>
            <div className="post-meta">
              {t.categories[post.category] || post.category} · {t.by} {post.author} · {post.created_at}
            </div>
            <p className="muted">
              {post.content.slice(0, 180)}
              {post.content.length > 180 ? "..." : ""}
            </p>
            <div className="button-row">
              <button className="button secondary" type="button" onClick={() => handleLike(post.id)}>
                👍 {t.like} ({post.likes || 0})
              </button>
              <Link className="button ghost" to={`/forum/post/${post.id}`}>
                {t.openDiscussion} ({post.comments.length} {t.comments})
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}