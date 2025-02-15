import { BrowserRouter as Router } from 'react-router-dom';
//import Sidebar from './components/Sidebar';
import './index.css';
import PortfolioHero from './components/PortfolioHero';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsGrid from './components/ProjectsGrid';
import Certifications from './components/Certifications';
import Footer from './components/Footer ';


function App() {
  return (
    <Router>
      <div>
        {/* <PortfolioHero/> */}
        {/* <Sidebar/> */}
        <AboutSection/>
        <SkillsSection/>
        <ProjectsGrid/>
        <Certifications/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
