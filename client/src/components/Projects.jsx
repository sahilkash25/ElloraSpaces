// import { motion } from 'framer-motion';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'The Ivory Residence',
    category: 'Residential Interior',
    location: 'Patna, India',
    image: `${import.meta.env.BASE_URL}images/projects/project-1.jpg`,
  },
  {
    number: '02',
    title: 'The Grand Residence',
    category: 'Luxury Interior',
    location: 'New Delhi, India',
    image: `${import.meta.env.BASE_URL}images/projects/project-2.jpg`,
  },
  {
    number: '03',
    title: 'Modern Heritage',
    category: 'Contemporary Interior',
    location: 'Mumbai, India',
    image: `${import.meta.env.BASE_URL}images/projects/project-3.jpg`,
  },
];


function ProjectVisual({ project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const normalizedX = (x / rect.width - 0.5) * 4;
    const normalizedY = (y / rect.height - 0.5) * -4;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="project-card__visual"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-card__image"
      />

      <div className="project-card__overlay" />

      <div className="project-card__light" />

      <div className="project-card__frame">
        <span>{project.number}</span>
      </div>

      <div className="project-card__view">
        <span>View Project</span>
        <span>↗</span>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects__header">
          <div>
            <p className="section-label">Selected Projects</p>
            <div className="gold-line projects__line" />
          </div>

          <p className="projects__intro">
            Spaces designed with intention,
            refined through architecture,
            material and light.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
            >

              {/* <div className="project-card__visual">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                />

                <div className="project-card__overlay" />

                <div className="project-card__frame">
                  <span>{project.number}</span>
                </div>

                <div className="project-card__view">
                  <span>View Project</span>
                  <span>↗</span>
                </div>

              </div> */}

              <ProjectVisual project={project} />

              <div className="project-card__info">

                <div>
                  <p className="project-card__category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>
                </div>

                <div className="project-card__meta">
                  <span>{project.location}</span>

                  <span className="project-card__arrow">
                    ↗
                  </span>
                </div>

              </div>

            </motion.article>
          ))}
        </div>

        <div className="projects__footer">
          <span>Explore the ELLORA collection</span>

          <button type="button">
            View All Projects
            <span>↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;