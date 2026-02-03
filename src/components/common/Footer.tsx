import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

/**
 * LEARNING NOTE: Footer Component with Neon Styling
 *
 * Features:
 * - Social media links with hover animations
 * - Gradient divider
 * - Animated link effects
 *
 * PATTERN: Footer stays at bottom thanks to flex layout in Layout.tsx
 */

// Custom SVG icons for social platforms
const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[18px] h-[18px]"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[18px] h-[18px]"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Social media links configuration
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    icon: XIcon,
  },
  {
    name: 'Email',
    href: 'mailto:hello@example.com',
    icon: Mail,
  },
];

// Quick links for navigation
const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Gradient divider */}
      <div className="divider-glow" />

      <div className="glass-neon border-t border-primary/10">
        <div className="container-xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="font-clash text-xl font-bold">
                <span className="gradient-text">Tisha</span>
                <span className="text-foreground">DiFresco</span>
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Web Developer & Designer crafting bold digital experiences with
                creativity and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-clash font-semibold text-foreground">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm w-fit"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-clash font-semibold text-foreground">
                Connect
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tisha DiFresco. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Designed & Built with{' '}
              <span className="text-neon-magenta">♥</span> using React &
              Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
