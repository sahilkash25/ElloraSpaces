import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    number: '01',
    quote:
      'ELLORA understood the character of our home and transformed it into a space that feels both refined and deeply personal.',
    name: 'Aarav Mehta',
    project: 'The Ivory Residence',
    location: 'Patna, India',
  },
  {
    number: '02',
    quote:
      'Every detail felt intentional. From the material palette to the lighting, the entire space came together beautifully.',
    name: 'Riya Kapoor',
    project: 'The Grand Residence',
    location: 'New Delhi, India',
  },
  {
    number: '03',
    quote:
      'The design feels timeless without losing its warmth. ELLORA created an interior that truly feels like ours.',
    name: 'Kabir Sharma',
    project: 'Modern Heritage',
    location: 'Mumbai, India',
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        <div className="testimonials__header">
          <div>
            <p className="section-label">Client Stories</p>
            <div className="gold-line testimonials__line" />
          </div>

          <span className="testimonials__number">
            06 / STORIES
          </span>
        </div>

        <div className="testimonials__intro">
          <h2>
            Spaces that
            <span>stay with you.</span>
          </h2>

          <p>
            Every ELLORA project is shaped around the people
            who experience it. Here are a few words from those
            who invited us into their spaces.
          </p>
        </div>

        <div className="testimonials__list">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial"
              key={testimonial.number}
              initial={{ opacity: 0, y: 50 }}
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
              <div className="testimonial__number">
                {testimonial.number}
              </div>

              <div className="testimonial__quote">
                <span className="testimonial__mark">
                  “
                </span>

                <blockquote>
                  {testimonial.quote}
                </blockquote>
              </div>

              <div className="testimonial__client">
                <div>
                  <h3>{testimonial.name}</h3>

                  <p>{testimonial.project}</p>

                  <span>{testimonial.location}</span>
                </div>

                <span className="testimonial__arrow">
                  ↗
                </span>
              </div>

              <div className="testimonial__line" />
            </motion.article>
          ))}
        </div>

        <div className="testimonials__footer">
          <span>Experience</span>
          <span>Trust</span>
          <span>Craft</span>
          <span>Connection</span>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;