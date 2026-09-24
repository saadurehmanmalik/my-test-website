import { motion } from 'framer-motion';
import { useFontsReady } from './useFontsReady';

const rise = (ready, delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
  transition: {
    y: { type: 'spring', stiffness: 100, damping: 30, mass: 0.5, delay },
    opacity: { duration: 1.4, delay, ease: [0.33, 1, 0.68, 1] },
  },
});

export default function Hero() {
  const ready = useFontsReady();

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <h1>
          <motion.span className="line-plain" {...rise(ready, 0.2)}>Digital Safety</motion.span>
          <motion.span className="line-script" {...rise(ready, 0.45)}>Simplified</motion.span>
        </h1>
        <motion.h2 {...rise(ready, 0.8)}>
          Your clear guide to the internet, rights, and safety in Pakistan.
        </motion.h2>
      </div>
    </header>
  );
}
