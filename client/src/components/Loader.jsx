import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="loader__content">
            <motion.p
              className="loader__brand"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ELLORA SPACES
            </motion.p>

            <motion.div
              className="loader__line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: 'easeInOut',
              }}
            />

            <motion.p
              className="loader__text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
            >
              INTERIOR DESIGN & TURNKEY SOLUTIONS.
            </motion.p>
          </div>

          <div className="loader__year">
            EST. 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;