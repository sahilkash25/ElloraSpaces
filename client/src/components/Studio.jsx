import { motion } from 'framer-motion';
import './Studio.css';

function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="container">

        <div className="studio__header">
          <div>
            <p className="section-label">The Studio</p>
            <div className="gold-line studio__line" />
          </div>

          <span className="studio__number">
            05 / STUDIO
          </span>
        </div>

        <div className="studio__layout">

          <motion.div
            className="studio__visual"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/projects/project-1.jpg`}
              alt="ELLORA interior design studio"
            />

            <div className="studio__overlay" />

            <div className="studio__frame">
              <span>ELLORA</span>
              <span>STUDIO / 2026</span>
            </div>

            <div className="studio__vertical">
              Interior Architecture
            </div>
          </motion.div>

          <div className="studio__content">

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: 'easeOut',
              }}
            >
              Design with
              <span>intention.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: 'easeOut',
              }}
            >
              ELLORA is a design studio built around the belief
              that beautiful spaces begin with thoughtful ideas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: 'easeOut',
              }}
            >
              We bring together architecture, material,
              furniture and light to create interiors that
              feel considered rather than decorated.
            </motion.p>

            <motion.div
              className="studio__signature"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
            >
              <span>Our approach</span>

              <div className="studio__signature-line" />

              <strong>
                Thoughtful spaces.
                <br />
                Enduring design.
              </strong>
            </motion.div>

          </div>

        </div>

        <div className="studio__bottom">
          <span>Architecture</span>
          <span>Interior</span>
          <span>Furniture</span>
          <span>Lighting</span>
          <span>Material</span>
        </div>

      </div>
    </section>
  );
}

export default Studio;