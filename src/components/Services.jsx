const Services = () => {
  const services = [
    {
      title: "Heavy Machinery",
      desc: "Improves oil cleanliness and extends equipment life. By continuously removing water, dirt, and oxidation residues, Triple R filters keep hydraulic and engine oils in optimal condition.",
      image: "/Novagreentechltd/services/heavy_machinery.png"
    },
    {
      title: "Marine & Offshore",
      desc: "In harsh marine environments where contamination and moisture are constant threats, Triple R ensures maximum protection for engines, generators, thrusters, and hydraulic systems.",
      image: "/Novagreentechltd/services/marine_offshore.png"
    },
    {
      title: "Mining",
      desc: "In environments exposed to extreme dust and moisture, our filters continuously remove fine particles, water, and oxidation residues from all types of oils to prevent component failure.",
      image: "/Novagreentechltd/services/mining_industry.png"
    },
    {
      title: "Transport Fleets",
      desc: "Keeps engine and hydraulic oils clean and free from harmful particles. By extending oil and filter life, we help reduce the frequency of oil changes and cut maintenance costs.",
      image: "/Novagreentechltd/services/transport_fleets.png"
    },
    {
      title: "Power Generation",
      desc: "Provides continuous protection against contaminants, ensuring engines operate at peak efficiency. Less wear and tear means fewer maintenance requirements and a longer lifespan.",
      image: "/Novagreentechltd/services/power_generation.png"
    },
    {
      title: "Industrial Plants",
      desc: "Ensures that equipment runs smoothly and reliably, leading to fewer breakdowns, less downtime, and lower costs for oil replacements and filter changes.",
      image: "/Novagreentechltd/services/industrial_plants.png"
    },
    {
      title: "Petrochemical",
      desc: "Highly effective in the petrochemical industry, where machinery runs continuously under extreme conditions and oil cleanliness is mission-critical.",
      image: "/Novagreentechltd/services/petrochemical.png"
    },
    {
      title: "Aviation & Aerospace",
      desc: "A strong asset for hydraulic systems, turbine oils, and other critical lubrication systems where reliability and safety are paramount.",
      image: "/Novagreentechltd/services/aviation_aerospace.png"
    }
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Triple R Bypass Filtration Systems are engineered to deliver unmatched oil cleanliness across a broad spectrum of industries, maximizing operational efficiency.
        </p>
        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div className="feature-card animate-on-scroll" key={index} style={{ 
                padding: 0, 
                overflow: 'hidden', 
                position: 'relative',
                borderRadius: '16px',
                height: '350px',
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <img src={service.image} alt={service.title} style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }} className="industry-image" />
              
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                padding: '2.5rem 1.5rem 1.5rem',
                color: '#fff',
                textAlign: 'left'
              }}>
                <h3 style={{ margin: 0, color: '#fff', fontSize: '1.6rem', fontWeight: 'bold' }}>{service.title}</h3>
                {/* description hidden for cleaner photo look just like Triple R, but could be shown on hover if desired */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
