import React from 'react';

const Results = () => {
  const results = [
    {
      title: "Wear",
      desc: "Trap harmful wear metals, protecting your machinery from premature failure.",
      image: "./results/wear.jpg"
    },
    {
      title: "Soot",
      desc: "Effectively remove soot from engine oil, ensuring cleaner, longer-lasting performance.",
      image: "./results/soot.png"
    },
    {
      title: "Water",
      desc: "Eliminate water and acidity from oil, preventing corrosion and extending equipment life.",
      image: "./results/water.jpg"
    },
    {
      title: "Oxidation",
      desc: "Removing degradation byproducts, keeping oil stable and efficient.",
      image: "./results/oxidation.png"
    }
  ];

  return (
    <section className="section bg-light" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--secondary-blue)', textAlign: 'center' }}>
          Experience the Power of Triple R Filtration Technology
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-light)', fontSize: '1.2rem', fontWeight: '500' }}>
          Real Results with Triple R 2 microns absolute beta 1,000 Filter Elements
        </p>
        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {results.map((item, index) => (
            <div className="feature-card animate-on-scroll" key={index} style={{ 
              background: 'var(--white)', 
              border: 'none', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              padding: 0, 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: '12px'
            }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--secondary-blue)', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
