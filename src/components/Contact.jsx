import React, { useState } from 'react';

// ⚠️ REPLACE THIS with your Formspree form ID after signing up at https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqoglre';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Company: formData.company,
          Message: formData.message,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Talk to our filtration specialist</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

          {/* Contact Form */}
          <div style={{ background: 'var(--white)', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

            {status === 'success' ? (
              <div style={{
                textAlign: 'center', padding: '3rem 1rem',
                background: 'linear-gradient(135deg, #e8f5e9, #f1f8e9)',
                borderRadius: '10px', border: '1px solid #a5d6a7',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#2e7d32', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#388e3c', marginBottom: '1.5rem' }}>
                  Thank you! We've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                  style={{ padding: '0.6rem 2rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name" name="name" type="text"
                    placeholder="Your Name" required
                    value={formData.name} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email" name="email" type="email"
                    placeholder="Your Email" required
                    value={formData.email} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone" name="phone" type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company" name="company" type="text"
                    placeholder="Your Company Name"
                    value={formData.company} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message" name="message"
                    rows="5" placeholder="How can we help you?" required
                    value={formData.message} onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p style={{
                    color: '#c62828', background: '#ffebee',
                    padding: '0.75rem 1rem', borderRadius: '8px',
                    marginBottom: '1rem', fontSize: '0.9rem',
                    border: '1px solid #ef9a9a',
                  }}>
                    ⚠️ Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? '⏳ Sending...' : 'Send Message'}
                </button>
              </form>
            )}
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

