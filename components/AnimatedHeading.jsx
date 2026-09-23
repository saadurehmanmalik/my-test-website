import { Fragment } from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const word = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function AnimatedHeading({ text, as = 'h2', className }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-label={text}
    >
      {text.split(' ').map((w, i, arr) => (
        <Fragment key={i}>
          <motion.span variants={word} aria-hidden="true" style={{ display: 'inline-block' }}>
            {w}
          </motion.span>
          {i < arr.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  );
}
