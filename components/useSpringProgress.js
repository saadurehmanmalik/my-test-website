import { useRef } from 'react';
import { useScroll, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

export const SPRING = { stiffness: 100, damping: 30, mass: 0.5, restDelta: 0.0005 };

// Returns [ref, progress]. progress goes 0 -> 1 as the element travels through `offset`,
// passed through a spring so fast scrolls / jumps glide and settle with weighted lag.
export function useSpringProgress(offset) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const smooth = useSpring(scrollYProgress, SPRING);
  const done = useMotionValue(1);
  return [ref, reduce ? done : smooth];
}
