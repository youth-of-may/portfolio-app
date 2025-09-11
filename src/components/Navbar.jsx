import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contacts">Contact</Link>
    </nav>
  );
}