import React from 'react';


function Nav(props) {
  const { currentTab, handleTabChange} = props;
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // Check if the currentTab is `About`, if yes then set it to active link class from bootstrap. Else, set it to normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')}
            // Check if the currentTab is `Portfolio`, if yes then set it to active link class from bootstrap. Else, set it to normal nav-link
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            // Check if the currentTab is `Contact`, if yes then set it to active link class from bootstrap. Else, set it to normal nav-link
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            // Check if the currentTab is `Resume`, if yes then set it to active link class from bootstrap. Else, set it to normal nav-link
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;
