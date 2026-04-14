import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n";

export default function Navbar() {
  const { t } = useI18n();

  const navItems = [
    ["/", t.nav.home],
    ["/learn-rwa", t.nav.learnRwa],
    ["/news", t.nav.news],
    ["/research", t.nav.research],
    ["/ai-report", t.nav.aiReport],
    ["/forum", t.nav.forum],
    ["/about", t.nav.about],
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand-wrap">
          <span className="brand">{t.brand.title}</span>
          <span className="brand-subtitle">{t.brand.subtitle}</span>
        </NavLink>

        <nav className="nav-links">
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}