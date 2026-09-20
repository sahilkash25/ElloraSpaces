import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import About from './components/About';
import Process from './components/Process';
import Studio from './components/Studio';
function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Philosophy />
      <Projects />
      <Gallery />
      <About />
      <Process />
      <Studio />

      <section
        id="projects"
        style={{
          minHeight: '100vh',
          background: 'var(--navy)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <p className="section-label">
          Selected Projects — Coming Next
        </p>
      </section>

      <section
        id="contact"
        style={{
          minHeight: '60vh',
          background: 'var(--navy-surface)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <p className="section-label">
          Start Your Project — Coming Next
        </p>
      </section>
    </>
  );
}

export default App;