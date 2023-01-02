import './assets/bootstrap/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar';
import Section from './components/Section';
import Footer from './components/Footer';
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}
