import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="hero" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/services/heavy_machinery.png")',
      }}>
        <div className="container">
          <div className="hero-content animate-on-scroll">
            <h1>High-Performance Oil Filtration Systems</h1>
            <p className="delay-1">
              Extend equipment life and reduce downtime with advanced bypass oil filtration systems. 
              Nova Green Tech Ltd, official partner of Triple R Africa, delivers proven solutions trusted across the world.
            </p>
            <a href="#services" className="btn-primary delay-2">Discover How</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
