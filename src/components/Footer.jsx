import React from 'react';
import tripleRLogo from '../assets/Triple-R-FIlters.png';

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      backgroundImage: 'linear-gradient(rgba(12, 148, 72, 0.85), rgba(12, 148, 72, 0.9)), url("/services/industrial_plants.png")',
    }}>
      <div className="footer-content">
        <div className="footer-col">
          <img src="/nova_green_tech_logo_traced.svg" alt="Nova Green Tech Ltd Logo" style={{ height: '75px', width: 'auto', marginBottom: '1.5rem', display: 'block' }} />
          <p style={{ fontSize: '1.1rem', color: 'white' }}>Official partner of Triple R Africa.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>Powered by</span>
            <img src={tripleRLogo} alt="Triple R Logo" style={{ height: '65px', filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'white' }}>Delivering 4-in-one oil cleaning solutions for the future.</p>
        </div>
        <div className="footer-col">
          <a href="#about" style={{ display: 'block', marginBottom: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: '500' }}>About Us</a>
          <a href="#services" style={{ display: 'block', marginBottom: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: '500' }}>Industries</a>
          <a href="#products" style={{ display: 'block', marginBottom: '0.5rem', color: 'white', textDecoration: 'none', fontWeight: '500' }}>Products</a>
          <a href="#contact" style={{ display: 'block', color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', marginTop: '2rem', paddingTop: '2rem' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Nova Green Tech Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
