import React from 'react';
import tripleRLogo from '../assets/Triple-R-FIlters.png';
import buSeriesPdf from '../assets/PDFs files/BU- SERIES.pdf';
import trSeriesPdf from '../assets/PDFs files/TR_AL- SERIES (1).pdf';
import seSeriesPdf from '../assets/PDFs files/SE- SERIES.pdf';
import oscaSeriesPdf from '../assets/PDFs files/OSCA- SERIES.pdf';
import wsSeriesPdf from '../assets/PDFs files/WS- SERIES.pdf';
import ssSeriesPdf from '../assets/PDFs files/SS- SERIES.pdf';

const Products = () => {
  const products = [
    {
      name: "BU Series",
      desc: "Engineered specifically for hydraulic systems operating up to 450 bar. Designed to connect directly to the high-pressure line without the need for an external motor or pump, it simplifies installation and reduces maintenance. Equipped with M-series 2μ absolute filter elements.",
      image: "/Novagreentechltd/products/bu-series.png",
      pdfLink: buSeriesPdf
    },
    {
      name: "TR Series",
      desc: "Heavy-duty particulate removal for robust industrial machinery.",
      image: "/Novagreentechltd/products/tr-series.png",
      pdfLink: trSeriesPdf
    },
    {
      name: "SE Series",
      desc: "Compact off-line oil cleaner, designed to purify hydraulic oils by removing solid particles, water, and oxidation residues. Built around a compact power pack, it connects easily to oil reservoirs, ensuring extended oil life and reduced maintenance costs.",
      image: "/Novagreentechltd/products/se-series.png",
      pdfLink: seSeriesPdf
    },
    {
      name: "OSCA Series",
      desc: "The OSCA Series is Triple R's robust off-line oil cleaner, designed for large hydraulic and lubrication systems with oil volumes up to 50,000 liters. Equipped with its own motor-pump unit, it offers reliable, high-flow filtration for demanding applications.",
      image: "/Novagreentechltd/products/osca-series.png",
      pdfLink: oscaSeriesPdf
    },
    {
      name: "WS Series",
      desc: "Combines solid particle filtration with coalescent water separation, effectively removing contaminants and free water. Its clear acrylic housing allows visual monitoring. Ideal for systems prone to water contamination, ensuring extended oil life.",
      image: "/Novagreentechltd/products/ws-series.png",
      pdfLink: wsSeriesPdf
    },
    {
      name: "SS Series",
      desc: "Features robust carbon steel housings accommodating multiple filter elements, ideal for high-flow applications. It effectively removes fine particles, water, and oxidation residues, ensuring comprehensive oil purification for large-volume systems.",
      image: "/Novagreentechltd/products/ss-series.png",
      pdfLink: ssSeriesPdf
    },
    {
      name: "Filter Elements",
      desc: "Triple R's continuous investment in research and development delivers the highest standard of efficiency in oil filtration. Protecting your investments while boosting productivity.",
      image: "/Novagreentechltd/products/filter-elements.webp"
    }
  ];

  return (
    <section id="products" className="section" style={{ padding: '0' }}>
      {/* Japan Products banner - systemized via CSS */}
      <div className="japan-banner">
        <h2>Japan Products</h2>
        <img src={tripleRLogo} alt="Triple R Logo" style={{ height: '90px', objectFit: 'contain' }} />
      </div>

      <div className="container" style={{ paddingTop: '3rem' }}>
        <h2 className="section-title">Our Products</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Discover our high-quality products designed to meet your specific needs. Each product is meticulously engineered to deliver superior performance for your operations.
        </p>

        <div className="grid grid-3">
          {products.map((product, index) => (
            <div className="feature-card animate-on-scroll" key={index}>
              <div className="card-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-content">
                <h3>{product.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{product.desc}</p>
                {product.pdfLink ? (
                  <a href={product.pdfLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Learn More</a>
                ) : (
                  <button className="btn-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Learn More</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
