import { motion, useTransform, useReducedMotion } from 'framer-motion';
import { useSpringProgress } from './useSpringProgress';

export default function FadeUp({ as = 'div', delay = 0, className, children }) {
  const Tag = motion[as];
  const reduce = useReducedMotion();
  const [ref, progress] = useSpringProgress(['start 1', 'start 0.75']);
  const start = Math.min(delay * 0.5, 0.5); // delay -> stagger inside the scroll range
  const opacity = useTransform(progress, [start, 1], [0, 1]);
  const y = useTransform(progress, [start, 1], [40, 0]);

  return (
    <Tag ref={ref} className={className} style={{ opacity, y: reduce ? 0 : y }}>
      {children}
    </Tag>
  );
}
