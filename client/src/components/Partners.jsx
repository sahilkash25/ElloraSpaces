import { motion } from 'framer-motion';
import './Partners.css';

const partners = [
  {
    number: '01',
    name: 'Marble & Stone',
    description:
      'Natural surfaces selected for depth, character and timeless architectural expression.',
  },
  {
    number: '02',
    name: 'Fine Wood',
    description:
      'Warm timber and refined finishes chosen to bring balance and tactile richness to every space.',
  },
  {
    number: '03',
    name: 'Metal & Brass',
    description:
      'Precision-crafted details that introduce subtle contrast and a refined sense of luxury.',
  },
  {
    number: '04',
    name: 'Textiles',
    description:
      'Curated fabrics and textures that add softness, warmth and visual depth to interiors.',
  },
];

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">

        <div className="partners__header">
          <div>
            <p className="section-label">Materials & Partners</p>
            <div className="gold-line partners__line" />
          </div>

          <span className="partners__number">
            08 / PARTNERS
          </span>
        </div>

        <div className="partners__intro">
          <h2>
            Material
            <span>matters.</span>
          </h2>

          <p>
            We work with carefully selected materials and
            trusted makers to create interiors where every
            surface, texture and detail has a purpose.
          </p>
        </div>

        <div className="partners__list">
          {partners.map((partner, index) => (
            <motion.article
              className="partner"
              key={partner.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <div className="partner__number">
                {partner.number}
              </div>

              <div className="partner__name">
                <h3>{partner.name}</h3>
              </div>

              <div className="partner__description">
                <p>{partner.description}</p>

                <span className="partner__arrow">
                  ↗
                </span>
              </div>

              <div className="partner__line" />
            </motion.article>
          ))}
        </div>

        <div className="partners__footer">
          <span>
            Selected with intention
          </span>

          <span>
            ELLORA · 2026
          </span>
        </div>

      </div>
    </section>
  );
}

export default Partners;