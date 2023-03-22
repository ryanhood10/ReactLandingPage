import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <Router>
      <PortfolioContainer>
        <Header />
        {/* The page rendering is handled inside the PortfolioContainer component */}
      </PortfolioContainer>
      <Footer />
    </Router>
  );
}

export default App;
