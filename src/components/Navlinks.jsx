import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavLinks({ position = "justify-end", mr = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "block py-2 px-4 hover:underline hover:underline-offset-8 hover:text-gray-600 hover:underline-gray-600 transition";
  const navStyle =
    "flex lg:gap-x-8 lg:text-2xl lg:w-full lg:px-8 text-xl gap-x-2 px-2 md:text-2xl md:gap-x-4 md:px-4";

  return (
    <div className="relative">
      <nav className={`hidden lg:flex ${navStyle} ${position} ${mr}`}>
        <Link to="/" className={linkStyle}>Home</Link>
        <Link to="/about" className={linkStyle}>About</Link>
        <Link to="/experience" className={linkStyle}>Experience</Link>
        <Link to="/projects" className={linkStyle}>Projects</Link>
        <Link to="/contacts" className={linkStyle}>Contact</Link>
      </nav>

      <button
        className="lg:hidden p-2 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <Link to="/" className={linkStyle} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className={linkStyle} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/experience" className={linkStyle} onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="/projects" className={linkStyle} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contacts" className={linkStyle} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}
