export default function AboutPage() {
  return (
    <section className="section">
      <div className="badge">About this platform</div>
      <h1 className="page-title">This project is now a real front-end website, not just an API shell.</h1>
      <p>
        The current version integrates the uploaded website content into working pages and keeps the platform structure you asked for: Home, learning pages, news, industry research, AI report, and forum.
      </p>
      <p className="muted">
        The backend handles API routes, AI report generation logic, forum CRUD, likes, and static hosting of the built React frontend so opening the backend URL shows the actual website.
      </p>
    </section>
  );
}
