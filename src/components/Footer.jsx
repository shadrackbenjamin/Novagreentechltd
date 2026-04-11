import React from 'react';
import tripleRLogo from '../assets/Triple-R-FIlters.png';

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.85), rgba(255, 255, 255, 0.95)), url("/services/industrial_plants.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="footer-content">
        <div className="footer-col">
          <img src="/nova_green_tech_logo_traced.svg" alt="Nova Green Tech Ltd Logo" style={{ height: '75px', width: 'auto', marginBottom: '1.5rem', display: 'block' }} />
          <p style={{ fontSize: '1.1rem', color: '#003366' }}>Official partner of Triple R Africa.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <span style={{ color: '#003366', fontSize: '1rem' }}>Powered by</span>
            <img src={tripleRLogo} alt="Triple R Logo" style={{ height: '65px', objectFit: 'contain' }} />
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#003366' }}>Delivering 4-in-one oil cleaning solutions for the future.</p>
        </div>
        <div className="footer-col">
          <a href="#about" style={{ display: 'block', marginBottom: '0.5rem', color: '#003366', textDecoration: 'none', fontWeight: '500' }}>About Us</a>
          <a href="#services" style={{ display: 'block', marginBottom: '0.5rem', color: '#003366', textDecoration: 'none', fontWeight: '500' }}>Industries</a>
          <a href="#products" style={{ display: 'block', marginBottom: '0.5rem', color: '#003366', textDecoration: 'none', fontWeight: '500' }}>Products</a>
          <a href="#contact" style={{ display: 'block', color: '#003366', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(0, 51, 102, 0.2)', marginTop: '2rem', paddingTop: '2rem' }}>
        <p style={{ color: '#003366', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Nova Green Tech Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
