import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useI18n } from "../i18n";
import { api } from "../services/api";
import SectionHeader from "../components/SectionHeader";

const forumPostText = {
  en: {
    loading: "Loading post...",
    commentsTitle: "Comments",
    noComments: "No comments yet.",
    addComment: "Add a comment",
    author: "Author",
    comment: "Comment",
    reply: "Reply",
    like: "Like",
    by: "by",
    comments: "comments",
    categories: {
      "General Discussion": "General Discussion",
      "Beginner Questions": "Beginner Questions",
      "Industry Applications": "Industry Applications",
      "Research & Academic Discussion": "Research & Academic Discussion",
      "Merchant Collaboration": "Merchant Collaboration",
    },
  },
  zh: {
    loading: "正在加载帖子...",
    commentsTitle: "评论",
    noComments: "暂时还没有评论。",
    addComment: "添加评论",
    author: "作者",
    comment: "评论内容",
    reply: "回复",
    like: "点赞",
    by: "作者",
    comments: "条评论",
    categories: {
      "General Discussion": "综合讨论",
      "Beginner Questions": "新手提问",
      "Industry Applications": "行业应用",
      "Research & Academic Discussion": "研究与学术讨论",
      "Merchant Collaboration": "商家合作",
    },
  },
};

export default function ForumPostPage() {
  const { postId } = useParams();
  const { language } = useI18n();
  const t = forumPostText[language] || forumPostText.en;

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

  if (!post) return <section className="section">{t.loading}</section>;

  return (
    <>
      <section className="section">
        <div className="badge">{t.categories[post.category] || post.category}</div>
        <h1 className="page-title">{post.title}</h1>
        <div className="post-meta">
          {t.by} {post.author} · {post.created_at}
        </div>
        <p>{post.content}</p>
        <div className="button-row">
          <button className="button secondary" type="button" onClick={handleLike}>
            👍 {t.like} ({post.likes || 0})
          </button>
          <div className="status-pill">
            {post.comments.length} {t.comments}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title={t.commentsTitle} />
        {post.comments.length === 0 ? <p className="muted">{t.noComments}</p> : null}
        {post.comments.map((item) => (
          <div className="card" key={item.id} style={{ marginBottom: "1rem" }}>
            <strong>{item.author}</strong>
            <div className="post-meta">{item.created_at}</div>
            <p>{item.content}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader title={t.addComment} />
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label className="label">{t.author}</label>
              <input
                className="input"
                value={comment.author}
                onChange={(e) => setComment((p) => ({ ...p, author: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <label className="label">{t.comment}</label>
            <textarea
              className="textarea"
              value={comment.content}
              onChange={(e) => setComment((p) => ({ ...p, content: e.target.value }))}
              required
            />
          </div>
          <div className="button-row">
            <button className="button" type="submit">
              {t.reply}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}