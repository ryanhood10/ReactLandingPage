import React from 'react';

function Header({ handlePageChange }) {
  return (
    <header>
      {/* Your header content */}
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => handlePageChange('About')}>
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange('Contact')}>
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange('Resume')}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
