/** @type {import('tailwindcss').Config} */

/**
 * LEARNING NOTE: This Tailwind configuration creates an "Electric Neon" theme
 * with vibrant cyan/magenta gradients, perfect for a bold creative portfolio.
 *
 * The color system uses CSS custom properties (HSL values) for easy theming
 * and supports both dark and light modes.
 */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * TYPOGRAPHY: Clash Display for bold headings, Cabinet Grotesk for body text
       * Both are variable fonts from Fontshare - free and high-quality
       */
      fontFamily: {
        // Primary display font - bold, geometric, perfect for headings
        clash: ['Clash Display', 'sans-serif'],
        // Secondary font - clean, readable, great for body text
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        // Fallback sans-serif stack
        sans: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
      },

      /**
       * ELECTRIC NEON COLOR PALETTE
       * Primary: Vibrant Cyan (#00D4FF → #06B6D4)
       * Secondary: Hot Magenta/Fuchsia (#FF00FF → #D946EF)
       * Accent: Electric Lime for highlights (#BFFF00)
       */
      colors: {
        // Core semantic colors (driven by CSS variables for theming)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // ELECTRIC NEON: Custom brand colors for direct use
        neon: {
          cyan: '#00D4FF',
          magenta: '#FF00FF',
          pink: '#FF61D8',
          purple: '#9D4EDD',
          lime: '#BFFF00',
          blue: '#4361EE',
        },

        // Chart colors for data visualization
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },

      /**
       * ANIMATION: Custom keyframes for bold, creative effects
       * These work with Framer Motion and CSS animations
       */
      keyframes: {
        // Gradient animation for backgrounds
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
        // Glow pulse effect
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 0, 255, 0.5), 0 0 80px rgba(255, 0, 255, 0.3)'
          },
        },
        // Text shimmer effect
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        // Float animation for elements
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // Slide up reveal
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Fade in with scale
        'fade-in-scale': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        // Border glow animation
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0, 212, 255, 0.5)' },
          '50%': { borderColor: 'rgba(255, 0, 255, 0.5)' },
        },
        // Spin slow for decorative elements
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Pulse glow
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },

      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in-scale': 'fade-in-scale 0.5s ease-out',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },

      /**
       * BACKGROUND: Custom gradient backgrounds
       */
      backgroundImage: {
        // Electric neon gradients
        'gradient-neon': 'linear-gradient(135deg, #00D4FF 0%, #FF00FF 100%)',
        'gradient-neon-reverse': 'linear-gradient(135deg, #FF00FF 0%, #00D4FF 100%)',
        'gradient-neon-vertical': 'linear-gradient(180deg, #00D4FF 0%, #FF00FF 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #00D4FF33 0px, transparent 50%), radial-gradient(at 80% 0%, #FF00FF33 0px, transparent 50%), radial-gradient(at 0% 50%, #9D4EDD33 0px, transparent 50%)',
      },

      /**
       * BOX SHADOW: Neon glow effects
       */
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)',
        'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.5), 0 0 40px rgba(157, 78, 221, 0.3)',
        'glow-sm': '0 0 10px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 212, 255, 0.4), 0 0 100px rgba(255, 0, 255, 0.2)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
