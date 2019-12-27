import React from 'react';
import './App.css';

import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Projects from './components/projects/Projects.js';
import Contact from './components/contact/Contact.js';

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Redbull  from "./components/redbull/Redbull";

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      {/*<Home />*/}
      <About />
      {/*<Projects />*/}
      {/*<Contact />*/}
      {/*<Footer />*/}
      {/*<Redbull />*/}
    </div>
  );
}

export default App;