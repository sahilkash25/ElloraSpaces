import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    number: '01',
    title: 'Residential',
    subtitle: 'Interiors',
    description:
      'Thoughtfully designed homes shaped around lifestyle, architecture and everyday experience.',
  },
  {
    number: '02',
    title: 'Luxury',
    subtitle: 'Custom Spaces',
    description:
      'Bespoke interiors where material, proportion, craftsmanship and detail come together.',
  },
  {
    number: '03',
    title: 'Commercial',
    subtitle: 'Interiors',
    description:
      'Distinctive environments designed to reflect the identity and purpose of every business.',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <div className="services__header">
          <div>
            <p className="section-label">What We Do</p>
            <div className="gold-line services__line" />
          </div>

          <span className="services__number">
            02 / SERVICES
          </span>
        </div>

        <div className="services__intro">
          <h2>
            Designed for
            <span>the way you live.</span>
          </h2>

          <p>
            From private residences to distinctive commercial
            environments, ELLORA creates spaces with a clear
            sense of identity, purpose and permanence.
          </p>
        </div>

        <div className="services__list">
          {services.map((service, index) => (
            <motion.article
              className="service"
              key={service.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
            >
              <div className="service__number">
                {service.number}
              </div>

              <div className="service__title">
                <h3>{service.title}</h3>
                <h3>{service.subtitle}</h3>
              </div>

              <div className="service__description">
                <p>{service.description}</p>

                <span className="service__arrow">
                  ↗
                </span>
              </div>

              <div className="service__line" />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;