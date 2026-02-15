import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Container, Code, Shield, Check } from 'lucide-react';
import { skills } from '@/data/achievements';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Container,
  Code,
  Shield
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="skills" 
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
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Deep expertise across cloud-native technologies, AI/ML, and security.
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Code;
          return (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/40 transition-all duration-500 hover:glow-purple">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>

                {/* Category */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {skill.category}
                </h3>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {skill.items.map((item) => (
                    <div 
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="glass-card rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">11</div>
              <div className="text-sm text-muted-foreground">Technical Blogs</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">$2M+</div>
              <div className="text-sm text-muted-foreground">Pipeline Generated</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">4.92</div>
              <div className="text-sm text-muted-foreground">Average CSAT</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">30k+</div>
              <div className="text-sm text-muted-foreground">Global Viewers</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
