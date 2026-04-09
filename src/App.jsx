import React, { useEffect } from 'react';
import About from './components/About';
import Benefits from './components/Benefits';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Expertise from './components/Expertise';
import Results from './components/Results';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for logo click
    const logo = document.getElementById('home-logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Intersection observer for rich scroll-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stagger children with animate-child class
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

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#" id="home-logo"><img src="/Novagreentechltd/logo.jpg" alt="Nova Green Tech Logo" /></a>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#benefits">Why Us</a>
          <a href="#products">Products</a>
          <a href="#services">Industries</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Get in Touch</a>
      </nav>

      <main>
        <Hero />
        <About />
        <Benefits />
        <Products />
        <Services />
        <Results />
        <Expertise />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
