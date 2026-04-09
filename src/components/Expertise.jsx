import React from 'react';

const Expertise = () => {
  const expertiseData = [
    {
      title: "100% made in Japan",
      desc: "Nova Green Tech Ltd is the official partner of Triple R Africa, bringing authentic Japanese engineering to your operations. Trusted across industries since 1967.",
      icon: "🇯🇵"
    },
    {
      title: "The Only 2-Micron Absolute Filter",
      desc: "Engineered for precision, our advanced bypass filtration system is the only solution capable of removing particles down to 2 microns absolutely—not nominally.",
      icon: "⚡"
    },
    {
      title: "Unmatched Operational Savings",
      desc: "Reduce oil-related failures by 80%, extend the lifespan of your heavy machinery, and significantly cut down your maintenance costs with our revolutionary approach.",
      icon: "📈"
    }
  ];

  return (
    <section className="section bg-white" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Engineered for Perfection</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {expertiseData.map((item, index) => (
            <div key={index} className="animate-on-scroll" style={{ 
              animationDelay: `${index * 0.2}s`, 
              textAlign: 'center',
              padding: '2rem',
              background: 'var(--off-white)',
              borderRadius: '12px',
              borderTop: '4px solid var(--primary-blue)',
              transition: 'transform 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block', backgroundColor: 'var(--light-blue)', width: '80px', height: '80px', lineHeight: '80px', borderRadius: '50%' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--secondary-blue)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
