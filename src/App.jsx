import React, { useEffect, useState } from 'react';
import About from './components/About';
import Benefits from './components/Benefits';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // Smooth scroll for logo click
    const logo = document.getElementById('home-logo');
    if (logo) {
      const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
      };
      logo.addEventListener('click', handleLogoClick);
      return () => logo.removeEventListener('click', handleLogoClick);
    }
  }, []);

  useEffect(() => {
    // Intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#" id="home-logo">
            <img src="/Novagreentechltd/logo.jpg" alt="Nova Green Tech Logo" />
          </a>
        </div>

        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
          <a href="#services">Industries</a>
          <a href="#benefits">Why Choose Us</a>
          <a href="#contact">Contact Us</a>
        </div>

        <a href="#contact" className="btn-primary navbar-cta">Get in Touch</a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2.5" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2.5" fill="none">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#products" onClick={closeMenu}>Our Products</a>
        <a href="#services" onClick={closeMenu}>Industries</a>
        <a href="#benefits" onClick={closeMenu}>Why Choose Us</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
        <a href="#contact" className="btn-primary" onClick={closeMenu} style={{ marginTop: '1rem', textAlign: 'center' }}>
          Get in Touch
        </a>
      </div>

      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Benefits />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
