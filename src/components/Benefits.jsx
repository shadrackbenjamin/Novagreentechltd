import React from 'react';

const Benefits = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon">♻️</div>
            <h3>Reduce Your Costs</h3>
            <p>
              By minimizing the impurities in hydraulic and lubrication systems, our clients have seen a remarkable decrease in oil consumption and up to 80% reduction in maintenance costs.
            </p>
          </div>
          <div className="feature-card animate-on-scroll delay-1">
            <div className="feature-icon">🔄</div>
            <h3>Reuse Your Oil</h3>
            <p>
              Achieve pristine oil cleanliness that extends the lifespan of your oil. Our systems eliminate the need for frequent oil replacements.
            </p>
          </div>
          <div className="feature-card animate-on-scroll delay-2">
            <div className="feature-icon">🌍</div>
            <h3>Recycle Sustainably</h3>
            <p>
              Breathe new life into used oil. We revitalize oil to its optimal condition, cutting CO2 emissions and promoting long-term environmental sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
