import { motion } from 'framer-motion';
import './Philosophy.css';

const principles = [
  {
    number: '01',
    title: 'Architecture',
    text: 'Proportion, structure and spatial flow create the foundation of every ELLORA interior.',
  },
  {
    number: '02',
    title: 'Material',
    text: 'Natural textures, refined finishes and considered details give every space its character.',
  },
  {
    number: '03',
    title: 'Light',
    text: 'Light shapes atmosphere, reveals material and brings depth to the spaces we create.',
  },
];

function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="container">

        <div className="philosophy__top">
          <div>
            <p className="section-label">The ELLORA Philosophy</p>
            <div className="gold-line philosophy__line" />
          </div>

          <span className="philosophy__number">
            01 / 03
          </span>
        </div>

        <div className="philosophy__heading">
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
          >
            Spaces shaped by
            <span>architecture, material & light.</span>
          </motion.h2>
        </div>

        <div className="philosophy__principles">
          {principles.map((principle, index) => (
            <motion.article
              className="principle"
              key={principle.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
            >
              <div className="principle__number">
                {principle.number}
              </div>

              <div className="principle__content">
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>

              <span className="principle__arrow">
                ↗
              </span>

              <div className="principle__line" />
            </motion.article>
          ))}
        </div>

        <div className="philosophy__footer">
          <span>Form</span>
          <span>Function</span>
          <span>Emotion</span>
          <span>Permanence</span>
        </div>

      </div>
    </section>
  );
}

export default Philosophy;