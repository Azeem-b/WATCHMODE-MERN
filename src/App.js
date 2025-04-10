import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/navigation';
import MoviesTitle from './components/homePage/MoviesTitle';
import MoviesDetails from './components/Details/MoviesDetails';
import AboutUs from './components/About/about';
import ContactUs from './components/Contact/contact';
import Home from './components/Home/home';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MoviesTitle />} />
        <Route path="/MoviesDetails/" element={<MoviesDetails />} />
        <Route path="/about/" element={<AboutUs />} />
        <Route path="/contact/" element={<ContactUs />} />
        <Route path="/home/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
