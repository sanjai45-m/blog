import React, { useState } from 'react';
import './SciencePage.css';
import { FaChevronDown } from 'react-icons/fa';

const SciencePage = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleDropdownClick = (index) => {
    setOpenDropdowns(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleItemClick = (link) => {
    setTimeout(() => {
      window.location.href = link;
    }, 500); // Adjust delay to match animation duration
  };

  const dropdowns = [
    { title: "Tamil", items: [
      { name: "Tamil 1", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
      { name: "Tamil 2", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" },
      { name: "Tamil 3", link: "https://questionbank200.blogspot.com/2024/08/Bharathidhasan.html" }
    ]},
    { title: "English", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "Maths", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "Science", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "Social", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "computer", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},   { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    { title: "english", items: [
      { name: "Physics", link: "https://example.com/physics" },
      { name: "Chemistry", link: "https://example.com/chemistry" },
      { name: "Biology", link: "https://example.com/biology" }
    ]},
    // Add more dropdowns as needed
  ];

  return (
    <div className="science-page-container">
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="dropdown">
          <div className="dropdown-toggle" onClick={() => handleDropdownClick(index)}>
            {dropdown.title} <FaChevronDown className={`dropdown-icon ${openDropdowns[index] ? 'rotate' : ''}`} />
          </div>
          <div className={`dropdown-content ${openDropdowns[index] ? 'show' : ''}`}>
            <ul className="tamil-items-list">
              {dropdown.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="tamil-item"
                  onClick={() => handleItemClick(item.link)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SciencePage;
