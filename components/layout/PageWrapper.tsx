"use client"
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { commonStyles } from '@/lib/styles';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className={`${commonStyles.pageContainer} ${className}`}
    >
      {children}
    </motion.div>
  );
} 