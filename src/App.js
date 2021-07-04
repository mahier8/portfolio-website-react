import Intro from "./components/intro/intro";
import Navbar from "./components/topbar/Navbar";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import './app.scss';
import { useState } from 'react';
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
