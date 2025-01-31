import { BrowserRouter as Router } from 'react-router-dom';
//import Sidebar from './components/Sidebar';
import './index.css';
import PortfolioHero from './components/PortfolioHero';
import SkillsSection from './components/SkillsSection';
import ProjectsGrid from './components/ProjectsGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer ';

function App() {
  return (
    <Router>
      <div>
        <PortfolioHero/>
        <SkillsSection/>
        <ProjectsGrid/>
        <AboutSection/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
