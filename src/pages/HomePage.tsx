import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Sparkles, Code, Palette, Share2 } from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  heroReveal,
  heroTitle,
  heroSubtitle,
  viewportConfig,
} from '@/lib/animations';

/**
 * LEARNING NOTE: HomePage with Bold Hero Section
 *
 * This homepage features:
 * - Full-screen hero with animated text reveal
 * - Parallax scrolling effects
 * - Animated service cards
 * - Scroll indicator with bounce animation
 *
 * PATTERN: We use Framer Motion's useScroll and useTransform
 * hooks for smooth parallax effects tied to scroll position.
 */

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="container-xl relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={heroReveal}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow text */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
              variants={heroSubtitle}
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-cabinet text-primary">
                Available for new projects
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-clash font-bold leading-none"
                variants={heroTitle}
              >
                <span className="block">I design & build</span>
                <span className="block gradient-text-animated mt-2">
                  digital experiences
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
              variants={heroSubtitle}
            >
              Web Developer, UI/UX Designer & Social Media Specialist crafting
              bold, creative solutions that make brands stand out in the digital
              landscape.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={heroSubtitle}
            >
              <motion.a
                href="/work"
                className="btn-gradient inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowDown size={18} className="rotate-[-90deg]" />
              </motion.a>
              <motion.a
                href="/contact"
                className="btn-neon inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs font-cabinet uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container-xl">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-4">
              What I <span className="gradient-text">Create</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Combining technical expertise with creative vision to deliver
              exceptional digital solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <motion.div
            className="glass-neon rounded-2xl p-8 md:p-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-clash font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-cabinet">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-xl">
          <motion.div
            className="relative text-center max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-6">
              Ready to bring your
              <br />
              <span className="gradient-text">vision to life?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's collaborate and create something extraordinary together.
              I'm always excited to work on new projects.
            </p>
            <motion.a
              href="/contact"
              className="btn-gradient inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
              <Sparkles size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Service card data
const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Building fast, responsive, and accessible web applications using modern technologies like React, TypeScript, and Next.js.',
    color: 'from-neon-cyan to-neon-blue',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Creating intuitive, visually stunning interfaces that deliver exceptional user experiences and drive engagement.',
    color: 'from-neon-magenta to-neon-purple',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description:
      'Developing strategic social media content and campaigns that build brand awareness and connect with audiences.',
    color: 'from-neon-purple to-neon-cyan',
  },
];

// Stats data
const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '100%', label: 'Dedication' },
];

// Service Card Component
interface ServiceCardProps {
  service: (typeof services)[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      className="card-neon p-6 md:p-8 group"
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <motion.div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6`}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-full h-full text-background" />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-clash font-bold mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Hover indicator */}
      <motion.div
        className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        Learn more
        <ArrowDown size={14} className="rotate-[-90deg]" />
      </motion.div>
    </motion.div>
  );
}
