import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/projects" className="nav">
          Projects
        </Link>
      </nav>
    </header>
  );
}
