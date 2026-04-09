import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="hero" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("./services/heavy_machinery.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        position: 'relative'
      }}>
        <div className="hero-content animate-on-scroll" style={{ width: '100%' }}>
          <h1 style={{ color: '#fff', fontSize: '4.5rem', maxWidth: '900px', margin: '0 auto 2rem', lineHeight: '1.1' }}>
            High-Performance Oil Filtration Systems
          </h1>
          <p className="delay-1" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Extend equipment life and reduce downtime with advanced bypass oil filtration systems. 
            Nova Green Tech Ltd, official partner of Triple R Africa, delivers proven solutions trusted across the world.
          </p>
          <a href="#services" className="btn-primary delay-2" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Discover How</a>
        </div>
      </section>
    </>
  );
};

export default Hero;
