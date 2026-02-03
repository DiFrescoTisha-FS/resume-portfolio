import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { AnimatedBackground } from './AnimatedBackground';
import { pageTransition } from '@/lib/animations';

/**
 * LEARNING NOTE: Layout Component with Animated Background
 *
 * This component provides a consistent structure for all pages:
 * - Animated neon background with floating orbs
 * - Fixed header with glass effect
 * - Page transition animations
 * - SEO management via React Helmet
 *
 * PATTERN: The layout wrapper ensures consistent navigation,
 * footer, and background across all pages.
 */

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  // Option to use minimal background for content-heavy pages
  minimalBackground?: boolean;
}

export default function Layout({
  children,
  title,
  description,
  minimalBackground = false,
}: LayoutProps) {
  const siteTitle = 'Tisha DiFresco | Web Developer & Designer';

  return (
    <>
      {/* SEO Management */}
      <Helmet>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        {description && <meta name="description" content={description} />}

        {/* Open Graph tags for social sharing */}
        <meta
          property="og:title"
          content={title ? `${title} | ${siteTitle}` : siteTitle}
        />
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={title ? `${title} | ${siteTitle}` : siteTitle}
        />
        {description && (
          <meta name="twitter:description" content={description} />
        )}
      </Helmet>

      {/* Animated Background */}
      <AnimatedBackground
        showGrid={!minimalBackground}
        glowIntensity={minimalBackground ? 0.3 : 0.6}
      />

      <div className="relative min-h-screen flex flex-col">
        <Header />

        {/* Main Content with page transition */}
        <AnimatePresence mode="wait">
          <motion.main
            className="flex-grow pt-24"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}
