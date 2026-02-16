import { motion } from 'framer-motion';
import { ChevronDown, Cloud, Brain, Container, Award } from 'lucide-react';
import { certifications } from '@/data/achievements';

const iconMap: Record<string, React.ElementType> = {
  Cloud,
  Brain,
  Container,
  Award
};

export function Hero() {
  const scrollToNext = () => {
    const forteSection = document.getElementById('forte');
    if (forteSection) {
      forteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">RAJ SESHADRI</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-3">
            Senior Solutions Architect | AWS | Aqua Security | RedHat | Dell
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Driving <span className="text-primary font-semibold">$2M+</span> in AWS Pipeline through 
            <span className="text-primary font-semibold"> Generative AI</span>, 
            <span className="text-primary font-semibold"> Container Security</span>, and 
            <span className="text-primary font-semibold"> Strategic Enablement</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="#publications"
            className="px-6 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-full text-primary font-medium transition-all duration-300 hover:scale-105"
          >
            View Publications
          </a>
          <a
            href="https://www.linkedin.com/in/rseshadri1/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Certifications Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-24 left-0 right-0 z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => {
              const IconComponent = iconMap[cert.icon] || Award;
              return (
                <motion.div
                  key={cert.name + cert.level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:border-primary/40 transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-white/90">{cert.name}</span>
                  <span className="text-xs text-muted-foreground">({cert.level})</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
