import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-white" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Our Mission Part */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'center', marginBottom: '6rem' }}>
          <div className="animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--secondary-blue)' }}>OUR MISSION</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-blue)', marginBottom: '2rem', borderRadius: '2px' }}></div>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
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
              src="/Novagreentechltd/services/power_generation.png" 
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

        {/* Seamless About Us Part */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eee' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2.5rem', color: 'var(--secondary-blue)' }}>ABOUT US</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-blue)', marginBottom: '3rem', borderRadius: '2px' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <p className="animate-on-scroll" style={{ marginBottom: '1.5rem', fontSize: '1.15rem', color: 'var(--text-dark)', fontWeight: '500' }}>
                Novagreentech Ltd is an industrial engineering solutions company focused on advancing equipment reliability, efficiency, and sustainability.
              </p>

              <p className="animate-on-scroll delay-1" style={{ marginBottom: '1.5rem', color: 'var(--text-light)', lineHeight: '1.7' }}>
                We specialize in advanced oil filtration and fluid management systems, delivering innovative bypass filtration technology that continuously removes ultra-fine contaminants, moisture, and degradation by-products from industrial oils while equipment remains in operation.
              </p>

              <p className="animate-on-scroll delay-2" style={{ marginBottom: '1.5rem', color: 'var(--text-light)', lineHeight: '1.7' }}>
                As a trusted distributor of Triple R Oil Filtration systems, we provide proven solutions that significantly extend oil life, reduce unplanned downtime, and optimize maintenance cycles.
              </p>
            </div>

            <div>
              <p className="animate-on-scroll delay-1" style={{ marginBottom: '2rem', color: 'var(--text-light)', lineHeight: '1.7' }}>
                Our approach goes beyond product supply. We partner with our clients to deliver value-driven engineering solutions that improve operational performance and support long-term asset reliability.
              </p>

              <div className="animate-on-scroll delay-2" style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ marginBottom: '1.2rem', color: 'var(--secondary-blue)', fontSize: '1.2rem', fontWeight: 'bold' }}>Industries We Serve:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ color: 'var(--text-light)', position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-blue)' }}>✔</span> Mining & Minerals
                  </div>
                  <div style={{ color: 'var(--text-light)', position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-blue)' }}>✔</span> Power & Energy
                  </div>
                  <div style={{ color: 'var(--text-light)', position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-blue)' }}>✔</span> Manufacturing
                  </div>
                  <div style={{ color: 'var(--text-light)', position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-blue)' }}>✔</span> Marine & Transport
                  </div>
                  <div style={{ color: 'var(--text-light)', position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-blue)' }}>✔</span> Construction
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll delay-3" style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-dark)', 
                fontWeight: '600', 
                padding: '2rem', 
                borderLeft: '5px solid var(--primary-blue)', 
                background: 'rgba(0, 51, 102, 0.03)',
                borderRadius: '0 12px 12px 0'
              }}>
                Committed to helping industries operate smarter, cleaner, and more efficiently through reliability-focused engineering solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
