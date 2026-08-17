'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthProgressProps {
  isLoading: boolean;
  progress: number;
  stage: string;
}

const stages = {
  'authenticating': 20,
  'creating_session': 40,
  'loading_profile': 60,
  'prefetching': 80,
  'redirecting': 95,
};

export const AuthProgress = ({ isLoading, progress, stage }: AuthProgressProps) => {
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowProgress(true);
    } else {
      const timer = setTimeout(() => setShowProgress(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {showProgress && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center p-3 sm:p-4 bg-white/90 backdrop-blur-sm z-50"
        >
          <div className="w-full max-w-[90vw] sm:max-w-md px-2 sm:px-0">
            {/* Stage indicator */}
            <motion.p 
              className="text-xs sm:text-sm text-gray-600 mb-2 text-center capitalize font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={stage}
            >
              {stage.replace('_', ' ')}
            </motion.p>
            
            {/* Progress bar container */}
            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              {/* Animated progress bar */}
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-500"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${progress}%`,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
              />
            </div>

            {/* Decorative dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthProgress;