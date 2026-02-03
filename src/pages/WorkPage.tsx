import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Play, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from '@/lib/animations';

/**
 * LEARNING NOTE: Work Page with Portfolio Showcase
 *
 * Features:
 * - Category filter tabs with smooth transitions
 * - Featured web projects with scroll-on-hover effect for long images
 * - Social media masonry gallery
 * - Before/After comparison slider
 * - Video reel previews
 */

// Filter categories
type Category = 'all' | 'web' | 'social';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredWebProjects =
    activeCategory === 'all' || activeCategory === 'web' ? webProjects : [];
  const filteredSocialProjects =
    activeCategory === 'all' || activeCategory === 'social'
      ? socialMediaProjects
      : [];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mb-6">
              My <span className="gradient-text">Creative Work</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of web development projects and social media campaigns
              that showcase bold design and strategic thinking.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex justify-center gap-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-cabinet font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-neon-cyan'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Web Projects Section */}
      <AnimatePresence mode="wait">
        {filteredWebProjects.length > 0 && (
          <motion.section
            key="web-projects"
            className="py-12 md:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-xl">
              <motion.h2
                className="text-2xl md:text-3xl font-clash font-bold mb-12"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                Web Development
              </motion.h2>

              <motion.div
                className="space-y-24"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {filteredWebProjects.map((project, index) => (
                  <WebProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Social Media Section */}
      <AnimatePresence mode="wait">
        {filteredSocialProjects.length > 0 && (
          <motion.section
            key="social-projects"
            className="py-12 md:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-xl">
              <motion.h2
                className="text-2xl md:text-3xl font-clash font-bold mb-12"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                Social Media
              </motion.h2>

              <motion.div
                className="space-y-16"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {filteredSocialProjects.map((project, index) => (
                  <SocialMediaProject key={project.title} project={project} index={index} />
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-xl">
          <motion.div
            className="glass-neon rounded-2xl p-8 md:p-16 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">
              Like what you see?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's create something amazing together. I'm always excited to take
              on new challenges.
            </p>
            <motion.a
              href="/contact"
              className="btn-gradient inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ============================================
// COMPONENTS
// ============================================

/**
 * Web Project Card with scroll-on-hover effect for long images
 */
interface WebProjectCardProps {
  project: (typeof webProjects)[0];
  index: number;
}

function WebProjectCard({ project, index }: WebProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        isEven ? '' : 'md:grid-flow-dense'
      }`}
      variants={fadeInUp}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(60px)',
        transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Project Image with scroll effect */}
      <div
        className={`relative ${isEven ? '' : 'md:col-start-2'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[4/3] group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          {/* Long image with scroll animation */}
          <motion.div
            className="absolute inset-0 w-full"
            animate={{
              y: isHovered ? '-60%' : '0%',
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
            }}
          >
            <img
              src={project.longImage}
              alt={project.title}
              className="w-full h-auto object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-3">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon text-sm py-2 px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} className="mr-2 inline" />
                  View Live
                </motion.a>
              )}
              <motion.button
                className="p-2 rounded-lg bg-card/80 border border-border text-foreground"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-magenta/10" />
          </div>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-cabinet font-medium"
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: isInView ? 1 : 0, rotate: -12 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          {project.category}
        </motion.div>
      </div>

      {/* Project Info */}
      <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
        <motion.span
          className="text-primary text-sm font-cabinet font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.year}
        </motion.span>

        <h3 className="text-2xl md:text-3xl font-clash font-bold mt-2 mb-4">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-cabinet"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results/Highlights */}
        {project.highlights && (
          <div className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/**
 * Social Media Project with Carousels and Lightbox
 */
interface SocialMediaProjectProps {
  project: (typeof socialMediaProjects)[0];
  index: number;
}

function SocialMediaProject({ project, index }: SocialMediaProjectProps) {
  const [postLightboxOpen, setPostLightboxOpen] = useState(false);
  const [postLightboxIndex, setPostLightboxIndex] = useState(0);
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const openPostLightbox = (idx: number) => {
    setPostLightboxIndex(idx);
    setPostLightboxOpen(true);
  };

  const openVideoLightbox = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setVideoLightboxOpen(true);
  };

  const navigatePostLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setPostLightboxIndex((prev) =>
        prev === 0 ? project.posts.length - 1 : prev - 1
      );
    } else {
      setPostLightboxIndex((prev) =>
        prev === project.posts.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <motion.div className="space-y-8" variants={fadeInUp}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-clash font-bold">
            {project.title}
          </h3>
          <p className="text-muted-foreground mt-1">{project.description}</p>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground">{project.posts.length}</strong>{' '}
            Posts
          </span>
          <span>
            <strong className="text-foreground">{project.reels.length}</strong>{' '}
            Reels
          </span>
        </div>
      </div>

      {/* Posts Carousel - alternating directions */}
      <Carousel
        title="Posts"
        icon={<Eye size={18} className="text-primary" />}
        autoPlay={true}
        autoPlayDirection={index % 2 === 0 ? 'right' : 'left'}
      >
        {project.posts.map((post, postIndex) => (
          <motion.div
            key={post}
            className="flex-shrink-0 w-[200px] md:w-[250px] relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => openPostLightbox(postIndex)}
          >
            <img
              src={post}
              alt={`${project.title} post ${postIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <Eye size={20} className="text-primary" />
            </div>
            {/* Neon border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
          </motion.div>
        ))}
      </Carousel>

      {/* Reels Slider - manual arrow navigation */}
      {project.reels.length > 0 && (
        <ReelsSlider
          reels={project.reels}
          title={project.title}
          onReelClick={openVideoLightbox}
        />
      )}

      {/* Post Lightbox */}
      <AnimatePresence>
        {postLightboxOpen && (
          <ImageLightbox
            images={project.posts}
            currentIndex={postLightboxIndex}
            onClose={() => setPostLightboxOpen(false)}
            onNavigate={navigatePostLightbox}
            title={project.title}
          />
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <AnimatePresence>
        {videoLightboxOpen && (
          <VideoLightbox
            videoUrl={currentVideoUrl}
            onClose={() => setVideoLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Reels Slider Component - Manual slide-by-slide navigation
 */
interface ReelsSliderProps {
  reels: Reel[];
  title: string;
  onReelClick: (videoUrl: string) => void;
}

function ReelsSlider({ reels, title, onReelClick }: ReelsSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleCount = 4; // Number of reels visible at once
  const maxSlide = Math.max(0, reels.length - visibleCount);

  const goToPrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  return (
    <div className="relative">
      {/* Title */}
      <h4 className="text-lg font-clash font-semibold mb-4 flex items-center gap-2">
        <Play size={18} className="text-neon-magenta" />
        Reels
      </h4>

      <div className="relative group">
        {/* Left Arrow */}
        <AnimatePresence>
          {currentSlide > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-neon-magenta hover:text-background transition-colors"
              onClick={goToPrev}
            >
              <ChevronLeft size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: `calc(-${currentSlide} * (180px + 16px))`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {reels.map((reel, idx) => (
              <motion.div
                key={reel.thumbnail}
                className="flex-shrink-0 w-[140px] md:w-[180px] relative aspect-[9/16] rounded-xl overflow-hidden group/reel cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => onReelClick(reel.video)}
              >
                <img
                  src={reel.thumbnail}
                  alt={`${title} reel ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Play button overlay - always visible */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <motion.div
                    className="w-14 h-14 rounded-full bg-neon-magenta/90 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </motion.div>
                </div>
                {/* Neon border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover/reel:border-neon-magenta rounded-xl transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <AnimatePresence>
          {currentSlide < maxSlide && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-neon-magenta hover:text-background transition-colors"
              onClick={goToNext}
            >
              <ChevronRight size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-[5]" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-[5]" />
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide
                ? 'bg-neon-magenta w-6'
                : 'bg-muted hover:bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Reusable Carousel Component with Continuous Scroll
 *
 * LEARNING NOTE: For continuous scrolling, we duplicate the content
 * and use CSS animation to create a seamless infinite loop effect.
 */
interface CarouselProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  autoPlay?: boolean;
  autoPlayDirection?: 'left' | 'right';
  speed?: number; // pixels per second
}

function Carousel({
  children,
  title,
  icon,
  autoPlay = true,
  autoPlayDirection = 'right',
  speed = 30,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  // Calculate content width for animation duration
  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.scrollWidth / 2; // Divided by 2 because content is duplicated
      setContentWidth(width);
    }
  }, [children]);

  // Calculate animation duration based on content width and speed
  const duration = contentWidth / speed;

  // Manual scroll for arrows
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Title */}
      <h4 className="text-lg font-clash font-semibold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h4>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors opacity-0 group-hover:opacity-100"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={20} />
        </motion.button>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="overflow-hidden py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {autoPlay ? (
            // Continuous scroll with CSS animation
            <div
              ref={scrollRef}
              className="flex gap-4"
              style={{
                animation: `scroll-${autoPlayDirection} ${duration}s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'max-content',
              }}
            >
              {/* Original content */}
              {children}
              {/* Duplicated content for seamless loop */}
              {children}
            </div>
          ) : (
            // Static scroll without auto-play
            <div className="flex gap-4 overflow-x-auto hide-scrollbar px-1">
              {children}
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors opacity-0 group-hover:opacity-100"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={20} />
        </motion.button>

        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-[5]" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-[5]" />
      </div>

      {/* CSS Keyframes for continuous scroll */}
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

/**
 * Image Lightbox Component for viewing post images
 */
interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  title: string;
}

function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
  title,
}: ImageLightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Close Button */}
      <motion.button
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <X size={24} />
      </motion.button>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        onClick={() => onNavigate('prev')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        onClick={() => onNavigate('next')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Image */}
      <motion.div
        className="relative z-10 max-w-[90vw] max-h-[85vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${title} post ${currentIndex + 1}`}
            className="rounded-2xl shadow-2xl object-contain max-w-full max-h-[85vh]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-cabinet">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Video Lightbox Component for playing reel videos
 */
interface VideoLightboxProps {
  videoUrl: string;
  onClose: () => void;
}

function VideoLightbox({ videoUrl, onClose }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Auto-play video when opened
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Close Button */}
      <motion.button
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <X size={24} />
      </motion.button>

      {/* Video Container */}
      <motion.div
        className="relative z-10 max-h-[90vh] aspect-[9/16]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full max-h-[90vh] rounded-2xl shadow-2xl object-contain bg-black"
          controls
          playsInline
          loop
        />

        {/* Neon glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan rounded-2xl opacity-30 blur-lg -z-10 animate-pulse" />
      </motion.div>
    </motion.div>
  );
}

// ============================================
// DATA
// ============================================

const categories = [
  { id: 'all' as const, label: 'All Work' },
  { id: 'web' as const, label: 'Web Development' },
  { id: 'social' as const, label: 'Social Media' },
];

// Web Development Projects
const webProjects = [
  {
    title: 'Dale Tiffany',
    description:
      'Complete website redesign for a luxury lighting brand. Transformed an outdated site into a modern, elegant e-commerce experience with improved UX, retailer portal, and AI-powered chatbot integration.',
    longImage: '/images/DT-LONG.jpg',
    category: 'E-Commerce',
    year: '2024',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'AI Chatbot'],
    liveUrl: '#',
    highlights: [
      'Increased user engagement by 40%',
      'Built custom retailer portal',
      'Integrated AI chatbot for customer support',
    ],
  },
  {
    title: 'Angel City Massage',
    description:
      'Modern, calming website for a wellness spa. Features online booking integration, service showcases, and a serene design that reflects the brand\'s commitment to relaxation and healing.',
    longImage: '/images/Long.png',
    category: 'Wellness',
    year: '2024',
    tech: ['React', 'Next.js', 'Framer Motion', 'Booking API'],
    liveUrl: '#',
    highlights: [
      'Online booking integration',
      'Mobile-first responsive design',
      'SEO optimized for local search',
    ],
  },
  {
    title: 'Bamvsthewrld',
    description:
      'Bold, creative portfolio and brand website for a content creator. Features dynamic animations, video integration, and a unique visual identity that captures the creator\'s personality.',
    longImage: '/images/scroll-img-3.png',
    category: 'Portfolio',
    year: '2023',
    tech: ['React', 'Vite', 'GSAP', 'Three.js'],
    liveUrl: '#',
    highlights: [
      'Custom 3D animations',
      'Video portfolio integration',
      'Social media link hub',
    ],
  },
];

// Reel type with thumbnail and video
interface Reel {
  thumbnail: string;
  video: string;
}

// Social Media Projects
const socialMediaProjects = [
  {
    title: 'Dale Tiffany',
    description:
      'Luxury lighting brand social media management including content creation, photography, and video reels showcasing elegant home décor.',
    posts: [
      '/social-media/dale-tiffany/post-1.jpg',
      '/social-media/dale-tiffany/post-2.jpg',
      '/social-media/dale-tiffany/post-4.jpg',
      '/social-media/dale-tiffany/post-5.png',
      '/social-media/dale-tiffany/post-6.jpg',
      '/social-media/dale-tiffany/post-7.jpg',
      '/social-media/dale-tiffany/post-8.jpg',
      '/social-media/dale-tiffany/post-14.png',
      '/social-media/dale-tiffany/post-15.png',
    ],
    reels: [
      { thumbnail: '/social-media/dale-tiffany/reel-1-thumb.png', video: '/social-media/dale-tiffany/reel-1.mp4' },
      { thumbnail: '/social-media/dale-tiffany/reel-2-thumb.jpg', video: '/social-media/dale-tiffany/reel-2.mp4' },
      { thumbnail: '/social-media/dale-tiffany/reel-3-thumb.png', video: '/social-media/dale-tiffany/reel-3.mp4' },
      { thumbnail: '/social-media/dale-tiffany/reel-4-thumb.png', video: '/social-media/dale-tiffany/reel-4.mp4' },
      { thumbnail: '/social-media/dale-tiffany/reel-5-thumb.png', video: '/social-media/dale-tiffany/reel-5.mp4' },
      { thumbnail: '/social-media/dale-tiffany/reel-6-thumb.png', video: '/social-media/dale-tiffany/reel-6.mp4' },
      { thumbnail: '/social-media/dale-tiffany/reel-7-thumb.png', video: '/social-media/dale-tiffany/reel-7.mp4' },
      { thumbnail: '/social-media/dale-tiffany/reel-8-thumb.png', video: '/social-media/dale-tiffany/reel-8.mp4' },
    ] as Reel[],
  },
  {
    title: 'Living Better Life',
    description:
      'Wellness and lifestyle brand content strategy featuring motivational posts, product highlights, and engaging video content.',
    posts: [
      '/social-media/living-better-life/post-1.png',
      '/social-media/living-better-life/post-2.png',
      '/social-media/living-better-life/post-3.png',
      '/social-media/living-better-life/post-4.png',
      '/social-media/living-better-life/post-5.png',
      '/social-media/living-better-life/post-6.png',
      '/social-media/living-better-life/post-7.png',
      '/social-media/living-better-life/post-20.jpg',
      '/social-media/living-better-life/post-21.jpg',
    ],
    reels: [
      { thumbnail: '/social-media/living-better-life/reel-1-thumb.png', video: '/social-media/living-better-life/reel-1.mp4' },
      { thumbnail: '/social-media/living-better-life/reel-2-thumb.png', video: '/social-media/living-better-life/reel-2.mp4' },
      { thumbnail: '/social-media/living-better-life/reel-3-thumb.png', video: '/social-media/living-better-life/reel-3.mp4' },
      { thumbnail: '/social-media/living-better-life/reel-5-thumb.png', video: '/social-media/living-better-life/reel-5.mp4' },
      { thumbnail: '/social-media/living-better-life/reel-6-thumb.jpg', video: '/social-media/living-better-life/reel-6.mp4' },
      { thumbnail: '/social-media/living-better-life/reel-7-thumb.png', video: '/social-media/living-better-life/reel-7.mp4' },
      { thumbnail: '/social-media/living-better-life/reel-8-thumb.png', video: '/social-media/living-better-life/reel-8.mp4' },
      { thumbnail: '/social-media/living-better-life/reel-9-thumb.png', video: '/social-media/living-better-life/reel-9.mp4' },
    ] as Reel[],
  },
];
