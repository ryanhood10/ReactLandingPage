import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer';

import PortfolioContainer from './components/PortfolioContainer';



function App() {
  return (
    <Router>
      <div className="main-container">
      <PortfolioContainer>
    
        {/* The page rendering is handled inside the PortfolioContainer component */}
      </PortfolioContainer>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

