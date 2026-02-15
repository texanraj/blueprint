import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Lightbulb, Award, ArrowUpRight } from 'lucide-react';
import { achievements } from '@/data/achievements';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  Lightbulb,
  Award
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const
    }
  }
};

export function Forte() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="forte" 
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 block">
            Impact Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="gradient-text">Forte</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Delivering exceptional results through technical expertise, innovation, and strategic partnerships.
          </p>
        </motion.div>
      </div>

      {/* Achievement Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {achievements.map((achievement) => {
          const IconComponent = iconMap[achievement.icon] || Award;
          return (
            <motion.div
              key={achievement.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover:border-primary/40 transition-all duration-500 hover:glow-purple">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {achievement.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3">
                  {achievement.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-white/80">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
