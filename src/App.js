import React from "react";
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Banner/>
      <Navbar/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
