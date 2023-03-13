import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';

// import Search from './components/pages/Search';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
