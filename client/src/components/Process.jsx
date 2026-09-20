import { motion } from 'framer-motion';
import './Process.css';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We begin by understanding your space, lifestyle, aspirations and the character of the project.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Ideas become direction through spatial planning, mood, materials, proportions and a clear design language.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We develop the interior through detailed concepts, finishes, furniture, lighting and architectural elements.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'Every detail is reviewed and refined to create balance, consistency and a sense of permanence.',
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'The final vision comes together through careful execution, coordination and attention to every detail.',
  },
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="container">

        <div className="process__header">
          <div>
            <p className="section-label">Our Process</p>
            <div className="gold-line process__line" />
          </div>

          <span className="process__number">
            04 / PROCESS
          </span>
        </div>

        <div className="process__intro">
          <h2>
            From first
            <span>idea to final detail.</span>
          </h2>

          <p>
            A considered process gives every ELLORA project
            clarity, direction and room for thoughtful design.
          </p>
        </div>

        <div className="process__timeline">

          <div className="process__track">
            <div className="process__track-line" />
          </div>

          <div className="process__steps">
            {processSteps.map((step, index) => (
              <motion.article
                className="process__step"
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
              >
                <div className="process__step-top">
                  <span className="process__step-number">
                    {step.number}
                  </span>

                  <div className="process__step-dot" />
                </div>

                <div className="process__step-content">
                  <h3>{step.title}</h3>

                  <p>
                    {step.description}
                  </p>
                </div>

                <span className="process__step-arrow">
                  ↗
                </span>
              </motion.article>
            ))}
          </div>

        </div>

        <div className="process__footer">
          <span>Intent</span>
          <span>Clarity</span>
          <span>Craft</span>
          <span>Detail</span>
          <span>Permanence</span>
        </div>

      </div>
    </section>
  );
}

export default Process;