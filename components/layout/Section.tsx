"use client"
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { commonStyles } from '@/lib/styles';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Section({ children, title, subtitle, className = "" }: SectionProps) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${commonStyles.sectionContainer} ${className}`}
    >
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <motion.h2 
              variants={fadeIn}
              className={commonStyles.heading}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              variants={fadeIn}
              className={commonStyles.subheading}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
} 