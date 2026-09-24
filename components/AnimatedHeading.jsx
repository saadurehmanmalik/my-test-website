import { Fragment } from 'react';
import { motion, useTransform, useReducedMotion } from 'framer-motion';
import { useSpringProgress } from './useSpringProgress';

function Word({ children, progress, index, total }) {
  const reduce = useReducedMotion();
  const s = (index / total) * 0.45;
  const e = s + 0.55;
  const y = useTransform(progress, [s, e], ['110%', '0%']);
  const opacity = useTransform(progress, [s, e], [0, 1]);

  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'top',
        padding: '0.1em 0',
        margin: '-0.1em 0',
      }}
    >
      <motion.span style={{ display: 'inline-block', y: reduce ? 0 : y, opacity }}>{children}</motion.span>
    </span>
  );
}

export default function AnimatedHeading({ text, as: Tag = 'h2', className }) {
  const [ref, progress] = useSpringProgress(['start 1', 'start 0.6']);
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <Word progress={progress} index={i} total={words.length}>{w}</Word>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  );
}
