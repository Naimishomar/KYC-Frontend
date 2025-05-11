// components/PageWrapper.jsx
import { motion } from 'framer-motion';

const slideAnimation = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
  transition: { duration: 0.25, ease: 'easeInOut' }
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={slideAnimation.initial}
      animate={slideAnimation.animate}
      exit={slideAnimation.exit}
      transition={slideAnimation.transition}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
