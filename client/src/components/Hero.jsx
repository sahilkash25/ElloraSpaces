import InteriorScene from './InteriorScene';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      {/* 3D background */}
      <div className="hero__scene">
        <InteriorScene />
      </div>

      {/* Cinematic overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content container">
        <p className="hero__eyebrow">
          Interior Design Studio
        </p>

        <h1 className="hero__title">
          Crafting
          <span>Spaces</span>
          <em>that endure.</em>
        </h1>

        <p className="hero__description">
          Refined interiors shaped by architecture,
          material and timeless design.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__button hero__button--primary">
            Explore Projects
          </a>

          <a href="#contact" className="hero__button hero__button--outline">
            Start Your Project
          </a>
        </div>
      </div>

      {/* Bottom details */}
      <div className="hero__bottom">
        <span>EST. 2026</span>

        <div className="hero__scroll">
          <span>Scroll to explore</span>
          <div className="hero__scroll-line" />
        </div>

        <span>Patna · India</span>
      </div>
    </section>
  );
}

export default Hero;