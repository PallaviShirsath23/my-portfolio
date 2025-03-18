import React, { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/mediaqueries.css";




function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo">Pallavi Shirsath</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <nav id="hamburger-nav">
        <div className="logo">Pallavi Shirsath</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Profile Section */}
      <section id="profile">
        <div className="section__pic-container">
          <img src={`${process.env.PUBLIC_URL}/assets/profile-pic.jpg`} alt="Profile Picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">PALLAVI SHIRSATH</h1>
          <p className="section__text__p2">Engineering Ideas Into Reality!</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open(`${process.env.PUBLIC_URL}/assets/resume-example.pdf`)}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href = "/#contact"}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn Profile" className="icon" 
                 onClick={() => window.location.href="https://www.linkedin.com/in/pallavi-shirsath-500233251/"} />
            <img src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="GitHub Profile" className="icon" 
                 onClick={() => window.location.href="https://github.com/PallaviShirsath23"} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="Email Icon" className="icon contact-icon email-icon" />
            <p><a href="mailto:pallavishirsath2003@gmail.com">pallavishirsath2003@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn Icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/pallavi-shirsath-500233251/">LinkedIn</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Pallavi Shirsath. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
