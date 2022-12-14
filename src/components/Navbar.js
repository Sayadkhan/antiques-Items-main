import { useRef } from "react";
import { NavLink } from "react-router-dom";

import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const blogRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const blogArr = [blogRef];
  const logoArr = [logoRef];

  useGsapDownStagger(liArr, 0.9);
  useGsapDownStagger(logoArr, 1.5);
  useGsapDownStagger(blogArr, 1.8);

  const navActiveStyle = ({ isActive }) => {
    return { color: isActive ? "#d53f41" : null };
  };

  return (
    <nav className="navbar wrapper">
      <div className="logo" ref={logoRef}>
        <NavLink to="/">
          <h2>
            <span className="antiques2">Antiques</span> Holder
          </h2>
        </NavLink>
      </div>
      <ul className="links">
        <li ref={li1}>
          <NavLink to="/featured" style={navActiveStyle}>
            Featured
          </NavLink>
        </li>
        <li ref={li2}>
          <NavLink to="/about" style={navActiveStyle}>
            About
          </NavLink>
        </li>
        <li ref={li3}>
          <NavLink to="/gallery" style={navActiveStyle}>
            Gallery
          </NavLink>
        </li>
      </ul>

      <div className="blog-link" ref={blogRef}>
        <NavLink to="/blog" style={navActiveStyle}>
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
