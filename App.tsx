import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestimonialSection from './components/TestimonialSection';
import TechEnabledSection from './components/TechEnabledSection';
import WorkWithBestSection from './components/WorkWithBestSection';
import OnboardingSection from './components/OnboardingSection';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <TestimonialSection />
        <TechEnabledSection />
        <WorkWithBestSection />
        <OnboardingSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
