import type { Variants } from 'framer-motion';

/**
 * LEARNING NOTE: Framer Motion Animation Presets
 *
 * This file contains reusable animation configurations for consistent,
 * bold animations throughout the portfolio. These are designed for
 * the "heavy animation" approach with scroll-triggered reveals,
 * parallax effects, and interactive hovers.
 *
 * USAGE:
 * import { fadeInUp, staggerContainer } from '@/lib/animations';
 *
 * <motion.div
 *   variants={fadeInUp}
 *   initial="hidden"
 *   whileInView="visible"
 *   viewport={{ once: true }}
 * >
 *   Content here
 * </motion.div>
 */

// ============================================
// TRANSITION PRESETS
// ============================================

/**
 * Spring transition - Bouncy, energetic feel
 */
export const springTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

/**
 * Smooth transition - Elegant, professional
 */
export const smoothTransition = {
  type: 'tween' as const,
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth deceleration
};

/**
 * Quick transition - Snappy interactions
 */
export const quickTransition = {
  type: 'tween' as const,
  duration: 0.3,
  ease: 'easeOut',
};

// ============================================
// FADE ANIMATIONS
// ============================================

/**
 * Fade in from bottom - Great for revealing content as user scrolls
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

/**
 * Fade in from left - Good for text content
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

/**
 * Fade in from right - Good for images/cards
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

/**
 * Fade in with scale - Dramatic entrance
 */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

/**
 * Simple fade - Subtle reveal
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

/**
 * Stagger container - Wrap children that should animate in sequence
 *
 * USAGE:
 * <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *   <motion.div variants={fadeInUp}>Item 1</motion.div>
 *   <motion.div variants={fadeInUp}>Item 2</motion.div>
 * </motion.div>
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Faster stagger for lists with many items
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slower stagger for dramatic effect
 */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// HOVER ANIMATIONS
// ============================================

/**
 * Card hover - Lift and glow effect
 */
export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 0 0 rgba(0, 212, 255, 0)',
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 212, 255, 0.2)',
    transition: quickTransition,
  },
};

/**
 * Button hover - Scale with glow
 */
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

/**
 * Link hover - Underline slide
 */
export const linkUnderline: Variants = {
  rest: {
    width: '0%',
  },
  hover: {
    width: '100%',
    transition: quickTransition,
  },
};

/**
 * Image hover - Zoom effect
 */
export const imageHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

/**
 * Page enter/exit animation
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

/**
 * Slide page transition
 */
export const slidePageTransition: Variants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: smoothTransition,
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// ============================================
// SPECIAL EFFECTS
// ============================================

/**
 * Text reveal - Character by character
 * Use with split text for dramatic headlines
 */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Blur reveal - Start blurred and come into focus
 */
export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

/**
 * Rotate in - Dramatic entrance with rotation
 */
export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: springTransition,
  },
};

/**
 * Bounce in - Playful entrance
 */
export const bounceIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
};

// ============================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================

/**
 * Parallax effect - Elements move at different speeds
 * Use with useScroll and useTransform hooks
 */
export const parallaxY = (distance: number = 50): Variants => ({
  hidden: {
    y: distance,
  },
  visible: {
    y: 0,
    transition: smoothTransition,
  },
});

/**
 * Progressive reveal - Good for hero sections
 */
export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    skewY: 7,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================
// VIEWPORT CONFIG
// ============================================

/**
 * Standard viewport config for scroll-triggered animations
 */
export const viewportConfig = {
  once: true,
  margin: '-100px',
};

/**
 * Eager viewport config - Triggers earlier
 */
export const viewportConfigEager = {
  once: true,
  margin: '-50px',
};

/**
 * Repeat viewport config - Animates every time element enters viewport
 */
export const viewportConfigRepeat = {
  once: false,
  margin: '-100px',
};
