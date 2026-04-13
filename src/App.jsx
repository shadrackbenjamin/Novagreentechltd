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
      <div className="top-bar">
        <a href="mailto:sales@novagreentechltd.com">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginRight: '4px' }}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          sales@novagreentechltd.com
        </a>
        <a href="tel:+233246770000">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginRight: '4px' }}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          +233 24 677 0000
        </a>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#" id="home-logo">
            <img src="/nova_green_tech_logo_traced.svg" alt="Nova Green Tech Logo" />
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
