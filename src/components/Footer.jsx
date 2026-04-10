import React from 'react';
import tripleRLogo from '../assets/Triple-R-FIlters.png';

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/Novagreentechltd/services/industrial_plants.png")',
    }}>
      <div className="footer-content">
        <div className="footer-col">
          <img src="/Novagreentechltd/logo.jpg" alt="Nova Green Tech Ltd Logo" style={{ height: '75px', width: 'auto', marginBottom: '1.5rem', display: 'block' }} />
          <p style={{ fontSize: '1.1rem' }}>Official partner of Triple R Africa.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Powered by</span>
            <img src={tripleRLogo} alt="Triple R Logo" style={{ height: '65px', objectFit: 'contain' }} />
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>Delivering 4-in-one oil cleaning solutions for the future.</p>
        </div>
        <div className="footer-col">
          <a href="#about" style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>About Us</a>
          <a href="#services" style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Industries</a>
          <a href="#products" style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Products</a>
          <a href="#contact" style={{ display: 'block', color: 'rgba(255,255,255,0.8)' }}>Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nova Green Tech Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
