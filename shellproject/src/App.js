import { BrowserRouter as Router } from 'react-router-dom';

// import components on the application

import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <PortfolioContainer>
        {/* The page rendering is being handled inside the PortfolioContainer component */}
      </PortfolioContainer>
      <Footer />
    </Router>
  );
}

export default App;

