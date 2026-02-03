import { motion } from 'framer-motion';

/**
 * LEARNING NOTE: Animated Background Component
 *
 * This component creates an immersive, animated background with:
 * - Animated gradient orbs that float and pulse
 * - Subtle grid pattern overlay
 * - Noise texture for depth
 *
 * PERFORMANCE: We use CSS transforms and opacity for animations
 * as they're GPU-accelerated and don't cause layout reflows.
 */

interface AnimatedBackgroundProps {
  // Optional: Show or hide the grid overlay
  showGrid?: boolean;
  // Optional: Intensity of the glow effects (0-1)
  glowIntensity?: number;
  // Optional: Additional CSS classes
  className?: string;
}

export const AnimatedBackground = ({
  showGrid = true,
  glowIntensity = 0.6,
  className = '',
}: AnimatedBackgroundProps) => {
  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden bg-background ${className}`}
      aria-hidden="true"
    >
      {/* Primary cyan orb - top left */}
      <motion.div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 255, ${glowIntensity * 0.3}) 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Secondary magenta orb - bottom right */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255, 0, 255, ${glowIntensity * 0.25}) 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -120, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Tertiary purple orb - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(157, 78, 221, ${glowIntensity * 0.2}) 0%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
        animate={{
          x: ['-50%', '-40%', '-60%', '-50%'],
          y: ['-50%', '-60%', '-40%', '-50%'],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Small accent orb - top right */}
      <motion.div
        className="absolute top-20 right-1/4 h-[200px] w-[200px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 255, ${glowIntensity * 0.4}) 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
        animate={{
          y: [0, -30, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Grid overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 bg-grid opacity-50"
          style={{
            maskImage:
              'radial-gradient(ellipse at center, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          }}
        />
      )}

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 100%)',
          opacity: 0.4,
        }}
      />
    </div>
  );
};

/**
 * LEARNING NOTE: Minimal Background Variant
 *
 * A lighter version for sections where the full background
 * might be too distracting.
 */
export const MinimalBackground = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(0, 212, 255, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
