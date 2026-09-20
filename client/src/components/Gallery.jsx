import { motion } from 'framer-motion';
import './Gallery.css';

const galleryItems = [
  {
    number: '01',
    title: 'Quiet Luxury',
    category: 'Living',
    image: `${import.meta.env.BASE_URL}images/projects/project-1.jpg`,
  },
  {
    number: '02',
    title: 'Material & Form',
    category: 'Architecture',
    image: `${import.meta.env.BASE_URL}images/projects/project-2.jpg`,
  },
  {
    number: '03',
    title: 'The Warmth Within',
    category: 'Bedroom',
    image: `${import.meta.env.BASE_URL}images/projects/project-3.jpg`,
  },
  {
    number: '04',
    title: 'Light & Shadow',
    category: 'Atmosphere',
    image: `${import.meta.env.BASE_URL}images/projects/bathroom.webp`,
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">

        <div className="gallery__header">
          <div>
            <p className="section-label">Inspiration</p>
            <div className="gold-line gallery__line" />
          </div>

          <span className="gallery__number">
            03 / INSPIRATION
          </span>
        </div>

        <div className="gallery__intro">
          <h2>
            A collection of
            <span>spaces & details.</span>
          </h2>

          <p>
            A visual exploration of materials, proportions,
            textures and light that define the ELLORA language.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <motion.article
              className={`gallery__item gallery__item--${index + 1}`}
              key={item.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <div className="gallery__visual">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery__overlay" />

                <div className="gallery__frame">
                  <span>{item.number}</span>
                </div>

                <div className="gallery__info">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;