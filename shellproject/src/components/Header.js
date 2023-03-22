import React from 'react';

function Header({ handlePageChange }) {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => handlePageChange('About')}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange('Resume')}>
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange('Contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
