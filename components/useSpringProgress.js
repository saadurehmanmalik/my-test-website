import { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';

export const SPRING = { stiffness: 100, damping: 30, mass: 0.5, restDelta: 0.0005 };

// Returns [ref, progress]. progress goes 0 -> 1 as the element travels through `offset`,
// passed through a spring so fast scrolls / jumps glide and settle with weighted lag.
export function useSpringProgress(offset) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const progress = useSpring(scrollYProgress, SPRING);
  return [ref, progress];
}
