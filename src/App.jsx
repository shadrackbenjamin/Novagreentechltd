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
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
      });
    }

    // Intersection observer for rich scroll-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.12}s`;
            child.classList.add('visible');
          });
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when menu is open
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

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
          <a href="#services">Industries</a>
          <a href="#benefits">Why Choose Us</a>
          <a href="#contact">Contact Us</a>
        </div>

        <a href="#contact" className="btn-primary navbar-cta" style={{ padding: '0.5rem 1.5rem' }}>Get in Touch</a>

        {/* Hamburger Button (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#products" onClick={closeMenu}>Our Products</a>
        <a href="#services" onClick={closeMenu}>Industries</a>
        <a href="#benefits" onClick={closeMenu}>Why Choose Us</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
        <a href="#contact" className="btn-primary" onClick={closeMenu} style={{ textAlign: 'center', marginTop: '0.5rem' }}>
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

