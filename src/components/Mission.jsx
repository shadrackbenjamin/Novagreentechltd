import React from 'react';

const Mission = () => {
  return (
    <section className="section bg-light" id="mission">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <div className="animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>OUR MISSION</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-blue)', marginBottom: '2rem', borderRadius: '2px' }}></div>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              With over a decade of experience, we have been at the forefront of delivering innovative oil cleaning and filtration solutions to industries ranging from construction, mining, marine, manufacturing, to heavy equipment operations. 
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', fontWeight: '600' }}>
              Our mission is to help our clients reduce oil-related failures, extend equipment lifespan, cut down maintenance costs, and boost operational efficiency.
            </p>
          </div>

          <div className="animate-on-scroll delay-1" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '20px', 
              left: '-20px', 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'var(--primary-blue)', 
              borderRadius: '20px', 
              zIndex: '0',
              opacity: '0.1'
            }}></div>
            <img 
              src="/services/power_generation.png" 
              alt="Triple R Filtration Mission" 
              style={{ 
                width: '100%', 
                borderRadius: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                position: 'relative',
                zIndex: '1',
                objectFit: 'cover',
                height: '400px'
              }} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;
