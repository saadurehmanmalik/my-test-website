import { motion } from 'framer-motion';

const rise = (delay) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <h1>
          <motion.span className="line-plain" {...rise(0)}>Digital Safety</motion.span>
          <motion.span className="line-script" {...rise(0.12)}>Simplified</motion.span>
        </h1>
        <motion.h2 {...rise(0.3)}>
          Your clear guide to the internet, rights, and safety in Pakistan.
        </motion.h2>
      </div>
    </header>
  );
}
