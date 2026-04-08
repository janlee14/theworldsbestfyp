import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LearnHubPage from "./pages/LearnHubPage";
import RwaIndustryOverviewPage from "./pages/RwaIndustryOverviewPage";
import RwaPrimitivesPage from "./pages/RwaPrimitivesPage";
import NonFinancialRwasPage from "./pages/NonFinancialRwasPage";
import NewsPage from "./pages/NewsPage";
import IndustryIndexPage from "./pages/IndustryIndexPage";
import IndustryDetailPage from "./pages/IndustryDetailPage";
import AIReportPage from "./pages/AIReportPage";
import ForumPage from "./pages/ForumPage";
import ForumPostPage from "./pages/ForumPostPage";
import AboutPage from "./pages/AboutPage";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn-rwa" element={<LearnHubPage />} />
          <Route path="/rwa-industry-overview" element={<RwaIndustryOverviewPage />} />
          <Route path="/rwa-primitives" element={<RwaPrimitivesPage />} />
          <Route path="/non-financial-rwas" element={<NonFinancialRwasPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/research" element={<IndustryIndexPage />} />
          <Route path="/research/:industryId" element={<IndustryDetailPage />} />
          <Route path="/ai-report" element={<AIReportPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/forum/post/:postId" element={<ForumPostPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
}