import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Talk to our filtration specialist</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Contact Form */}
          <div style={{ background: 'var(--white)', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Your Company Name" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit</button>
            </form>
          </div>

          {/* Ghana Contact Details */}
          <div>
            <div style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--white)', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>Ghana Office</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '0.5rem' }}>Address</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>North Industrial Area Plot 7 Block 5</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>Dadeban street Inside GAM Yard</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>Digital Address: GT-366-3796</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '0.5rem' }}>Phone</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>+233 24 677 0000</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>+233 25 621 7831</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '0.5rem' }}>Email</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>novagreentechltd@gmail.com</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>novagreentechofficial@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
