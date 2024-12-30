import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation(); // Get the current URL path

  // Dropdown data with links
  const dropdownData = [
    {
      title: "Tamil",
      items: [
        { name: "Tamil 1", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "Tamil 2", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "Tamil 3", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "Tamil 4", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" }
      ]
    },
    {
      title: "English",
      items: [
        { name: "English 1", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "English 2", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "English 3", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "English 4", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" }
      ]
    },
    {
      title: "Maths",
      items: [
        { name: "Maths 1", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "Maths 2", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
        { name: "Maths 3", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" }
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  const handleItemClick = (link) => {
    window.location.href = link;
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Function to check if the current path matches the given path
  const isActive = (path) => location.pathname === path;

  // Close the navbar on item click (for mobile view)
  const handleNavLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="burger-icon" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar ${navbarOpen ? 'show' : ''}`}>
        <ul className={`nav-links ${navbarOpen ? 'show' : ''}`}>
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/animated-shadow" onClick={handleNavLinkClick}>Home</Link>
          </li>
          {dropdownData.map((dropdown, index) => (
            <li
              key={index}
              className={`dropdown ${dropdownOpen === index ? 'active' : ''}`}
              onClick={() => handleDropdownToggle(index)}
            >
              <a href={`#${dropdown.title.toLowerCase()}`} className={isActive(`#${dropdown.title.toLowerCase()}`) ? 'active' : ''}>
                {dropdown.title} <FiChevronDown className="dropdown-icon" />
              </a>
              <ul className={`dropdown-menu ${dropdownOpen === index ? 'show' : ''}`}>
                {dropdown.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item.link);
                        handleNavLinkClick(); // Close menu on item click
                      }}
                      className={isActive(item.link) ? 'active' : ''}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className={isActive('/science') ? 'active' : ''}>
            <Link to="/science" onClick={handleNavLinkClick}>Science</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
