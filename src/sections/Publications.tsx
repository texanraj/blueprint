import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, BookOpen, Filter, Calendar } from 'lucide-react';
import { blogPosts, categories } from '@/data/blogs';
import type { BlogPost } from '@/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
  exit: { 
    opacity: 0, 
    x: 30,
    transition: { duration: 0.3 }
  }
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      layout
      className="group block"
    >
      <div className="glass-card rounded-xl p-5 sm:p-6 hover:border-primary/40 transition-all duration-300 hover:glow-purple">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2">
              {post.title}
            </h3>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-xs">{post.date}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-xs text-primary font-medium">{post.category}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-muted-foreground border border-white/10 group-hover:border-primary/30 group-hover:text-white/80 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300">
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Publications() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <section 
      id="publications" 
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 block">
            Knowledge Sharing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            11 AWS technical blogs covering EKS, Security, Blockchain, AI/ML, and Automation.
          </p>
        </motion.div>
      </div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto mb-10"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-2 mr-2 text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Blog Posts List */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No publications found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
