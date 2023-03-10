import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import Search from './components/pages/Search';

import logo from './logo.svg';
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
          <Route path="discover" element={<Discover />} />
          <Route path="search/*" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
