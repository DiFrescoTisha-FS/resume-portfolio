import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * LEARNING NOTE: Header Component with Neon Styling
 *
 * This header features:
 * - Glass morphism effect with blur
 * - Animated navigation links with neon hover
 * - Theme toggle with smooth icon transition
 * - Mobile responsive hamburger menu
 *
 * BEST PRACTICE: Keep navigation components simple and focused
 * on their primary purpose - navigation and basic UI controls.
 */

// Navigation links configuration
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/work', label: 'Work' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useAppStore();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glass background */}
      <div className="glass-neon border-b border-primary/10">
        <div className="container-xl py-4 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="relative group">
            <motion.span
              className="text-2xl font-clash font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="gradient-text">Tisha</span>
              <span className="text-foreground">DiFresco</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                isActive={location.pathname === path}
              >
                {label}
              </NavLink>
            ))}

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative overflow-hidden rounded-full border border-border hover:border-primary/50 hover:bg-primary/10"
              >
                <motion.div
                  initial={false}
                  animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: theme === 'dark' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Sun size={18} className="text-primary" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    rotate: theme === 'light' ? 0 : -180,
                    scale: theme === 'light' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Moon size={18} className="text-primary" />
                </motion.div>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-border"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-primary" />
              ) : (
                <Moon size={18} className="text-primary" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-full border border-border"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className="md:hidden glass-neon border-b border-primary/10 overflow-hidden"
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="container-xl py-4 flex flex-col gap-4">
          {navLinks.map(({ path, label }, index) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-lg font-clash font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}

/**
 * NavLink Component - Individual navigation link with neon hover effect
 */
interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

function NavLink({ to, isActive, children }: NavLinkProps) {
  return (
    <Link to={to} className="relative group">
      <span
        className={`font-cabinet font-medium transition-colors duration-300 ${
          isActive
            ? 'text-primary'
            : 'text-muted-foreground group-hover:text-foreground'
        }`}
      >
        {children}
      </span>

      {/* Animated underline */}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-neon"
        initial={false}
        animate={{
          width: isActive ? '100%' : '0%',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover underline */}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-neon transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
