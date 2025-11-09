import React from "react";

const GroupCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-full flex flex-col bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/40 shadow-md">
        
        {/* Image Skeleton */}
        <div className="relative h-48 w-full bg-gradient-to-br from-gray-300/20 to-gray-500/20 dark:from-gray-700/40 dark:to-gray-900/40" />

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          
          {/* Title Skeleton */}
          <div className="h-6 w-3/4 bg-white/30 dark:bg-gray-600/40 rounded-lg mb-4"></div>

          {/* Description Skeleton */}
          <div className="space-y-2 mb-4 flex-1">
            <div className="h-4 w-full bg-white/20 dark:bg-gray-600/30 rounded-lg"></div>
            <div className="h-4 w-5/6 bg-white/20 dark:bg-gray-600/30 rounded-lg"></div>
          </div>

          {/* Date Skeleton */}
          <div className="h-4 w-1/2 bg-white/20 dark:bg-gray-600/30 rounded-lg mb-6"></div>

          {/* Button Skeleton */}
          <div className="h-10 w-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default GroupCardSkeleton;
