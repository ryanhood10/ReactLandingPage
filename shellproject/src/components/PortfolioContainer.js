//encapsulates everything on the main page
import React, { useState } from 'react';

//import components
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';


export default function PortfolioContainer({ children }) {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="landing-page">
      <Header handlePageChange={handlePageChange} />
      {children}
      {renderPage()}
    </div>
  );
}
