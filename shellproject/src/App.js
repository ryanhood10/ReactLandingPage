import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';
import SplashScreen from './components/SplashScreen'; // import SplashScreen component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // change this to control how long the splash screen is visible

    return () => clearTimeout(timer); // this will clean up the timer if the component unmounts before the timer fires
  }, []);

  return (
    <Router>
      <div className="main-container">
        {loading ? <SplashScreen /> : null}
        <PortfolioContainer>
          {/* The page rendering is handled inside the PortfolioContainer component */}
        </PortfolioContainer>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
