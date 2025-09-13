import { Link } from "react-router-dom";
export default function NavLinks({position="justify-end", mr=""}) {
    const linkStyle = "animation ease-in-out hover:underline hover:underline-offset-8 hover:text-gray-600 hover:underline-gray-600"
    const navStyle = "w-full flex gap-x-8 text-2xl px-8"
    return (
        <>
        <nav className={`${navStyle} ${position} ${mr}`}>
            <Link to="/" className={linkStyle}>About</Link>
            <Link to="/experience" className={linkStyle}>Experience</Link>
            <Link to="/projects" className={linkStyle}>Projects</Link>
            <Link to="/contacts" className={linkStyle}>Contact</Link>
        </nav>
        </>
    )
}