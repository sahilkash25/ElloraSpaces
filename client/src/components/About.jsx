import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="about__top">
          <div>
            <p className="section-label">The ELLORA Approach</p>
            <div className="gold-line about__line" />
          </div>

          <p className="about__number">
            01 / ABOUT
          </p>
        </div>

        <div className="about__statement">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
          >
            We don't simply
            <span>design interiors.</span>
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
            We shape spaces around the way people live,
            work and experience the world.
          </motion.p>
        </div>

        <div className="about__content">

          <div className="about__vertical-line" />

          <div className="about__copy">
            <p>
              ELLORA is an interior design studio focused on
              creating refined, enduring spaces through
              architecture, material and light.
            </p>

            <p>
              Every project begins with understanding the
              character of a space and the people who inhabit it.
              From the first concept to the final detail,
              we believe thoughtful design should feel
              effortless and timeless.
            </p>
          </div>

          <div className="about__stats">

            <div className="about__stat">
              <span>EST.</span>
              <strong>2026</strong>
            </div>

            <div className="about__stat">
              <span>BASED IN</span>
              <strong>INDIA</strong>
            </div>

            <div className="about__stat">
              <span>FOCUS</span>
              <strong>INTERIORS</strong>
            </div>

          </div>

        </div>

        <div className="about__bottom">
          <span>Architecture</span>
          <span>Material</span>
          <span>Light</span>
          <span>Form</span>
        </div>

      </div>
    </section>
  );
}

export default About;