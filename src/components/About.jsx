import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="features-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '900px', textAlign: 'left', background: 'var(--white)', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderBottom: '4px solid var(--primary-blue)' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About Us</h2>
          
          <p className="animate-on-scroll" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
            <strong>Novagreentech Ltd</strong> is an industrial engineering solutions company focused on advancing equipment reliability, efficiency, and sustainability across critical industries.
          </p>

          <p className="animate-on-scroll delay-1" style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            We specialize in advanced oil filtration and fluid management systems, delivering innovative bypass filtration technology that continuously removes ultra-fine contaminants, moisture, and degradation by-products from industrial oils — while equipment remains in operation.
          </p>

          <p className="animate-on-scroll delay-2" style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            As a trusted distributor of Triple R Oil Filtration systems, we provide proven solutions that significantly extend oil life, reduce unplanned downtime, and optimize maintenance cycles for high-value machinery.
          </p>

          <p className="animate-on-scroll delay-1" style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            Our approach goes beyond product supply. We partner with our clients to deliver value-driven engineering solutions that improve operational performance, lower lifecycle costs, and support long-term asset reliability.
          </p>

          <div className="animate-on-scroll delay-2" style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--secondary-blue)' }}>We serve a wide range of industries including:</h4>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-light)' }}>
              <li>Mining & minerals</li>
              <li>Power & energy</li>
              <li>Manufacturing</li>
              <li>Marine & transport</li>
              <li>Construction & heavy equipment</li>
            </ul>
          </div>

          <p className="animate-on-scroll delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-dark)', fontWeight: '600' }}>
            At Novagreentech Ltd, we are committed to helping industries operate smarter, cleaner, and more efficiently through reliability-focused engineering solutions.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
