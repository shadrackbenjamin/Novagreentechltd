import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        {/* Our Mission Part */}
        <div className="about-grid" style={{ marginBottom: '6rem' }}>
          <div className="animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>OUR MISSION</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-blue)', marginBottom: '2rem', borderRadius: '2px' }}></div>
            
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              With over a decade of experience, we have been at the forefront of delivering innovative oil cleaning and filtration solutions to industries ranging from construction, mining, marine, manufacturing, to heavy equipment operations. 
            </p>
            <p style={{ color: 'var(--text-light)', fontWeight: '600' }}>
              Our mission is to help our clients reduce oil-related failures, extend equipment lifespan, cut down maintenance costs, and boost operational efficiency.
            </p>
          </div>

          <div className="animate-on-scroll delay-1 side-image-wrapper">
            <div className="image-accent"></div>
            <img 
              src="/services/power_generation.png" 
              alt="Triple R Filtration Mission" 
              className="responsive-img"
            />
          </div>
        </div>

        {/* Seamless About Us Part */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eee' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>ABOUT US</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-blue)', marginBottom: '3rem', borderRadius: '2px' }}></div>
          
          <div className="grid grid-2">
            <div>
              <p className="animate-on-scroll" style={{ marginBottom: '1.5rem', fontSize: '1.15rem', fontWeight: '500' }}>
                Novagreentech Ltd is an industrial engineering solutions company focused on advancing equipment reliability, efficiency, and sustainability.
              </p>

              <p className="animate-on-scroll delay-1" style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                We specialize in advanced oil filtration and fluid management systems, delivering innovative bypass filtration technology that continuously removes ultra-fine contaminants, moisture, and degradation by-products from industrial oils while equipment remains in operation.
              </p>

              <p className="animate-on-scroll delay-2" style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                As a trusted distributor of Triple R Oil Filtration systems, we provide proven solutions that significantly extend oil life, reduce unplanned downtime, and optimize maintenance cycles.
              </p>
            </div>

            <div>
              <p className="animate-on-scroll delay-1" style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                Our approach goes beyond product supply. We partner with our clients to deliver value-driven engineering solutions that improve operational performance and support long-term asset reliability.
              </p>

              <div className="animate-on-scroll delay-2" style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ marginBottom: '1.2rem', color: 'var(--secondary-blue)', fontSize: '1.2rem', fontWeight: 'bold' }}>Industries We Serve:</h4>
                <div className="grid grid-2" style={{ gap: '1rem' }}>
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
