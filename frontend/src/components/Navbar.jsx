import { NavLink } from "react-router-dom";

const navItems = [
  ["/", "Home"],
  ["/learn-rwa", "Learn RWA"],
  ["/news", "News"],
  ["/research", "Industry Research"],
  ["/ai-report", "AI Report"],
  ["/forum", "Forum"],
  ["/about", "About"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand-wrap">
          <span className="brand">Non-Financial RWA Hub</span>
          <span className="brand-subtitle">Education · Research · AI Report · Community</span>
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
