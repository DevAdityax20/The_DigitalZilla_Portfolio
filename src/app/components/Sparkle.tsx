import { motion } from 'motion/react';

interface SparkleProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}

export function Sparkle({ top, left, right, bottom, delay = 0 }: SparkleProps) {
  return (
    <motion.div
      className="absolute w-6 h-6"
      style={{ top, left, right, bottom }}
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
          fill="#FF6B35"
        />
        <path
          d="M17 4L17.5 6.5L20 7L17.5 7.5L17 10L16.5 7.5L14 7L16.5 6.5L17 4Z"
          fill="#FF6B35"
        />
      </svg>
    </motion.div>
  );
}
