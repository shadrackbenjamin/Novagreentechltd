import React from 'react';
import tripleRLogo from '../assets/Triple-R-FIlters.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="footer-col" style={{ maxWidth: '400px' }}>
          <img src="/logo.jpg" alt="Nova Green Tech Ltd Logo" className="footer-logo" />
          <p>Official partner of Triple R Africa.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Powered by</span>
            <img src={tripleRLogo} alt="Triple R Logo" style={{ height: '45px', objectFit: 'contain' }} />
          </div>
          <p>Delivering 4-in-one oil cleaning solutions for the future.</p>
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
