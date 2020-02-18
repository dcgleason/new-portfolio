import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Splash from './components/Splash';

function App() {
  return (
    <div>
    <NavBar/>
    <Splash/>
    <Portfolio/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;
