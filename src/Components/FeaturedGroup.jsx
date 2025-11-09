// Featured Groups Section Component
import React from 'react';
import GroupCard from './GroupCard';
import GroupCardSkeleton from './GroupCardSkeleton';

const FeaturedGroupsSection = ({ featuredGroups }) => {

    return (
        <div className="relative min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 py-16 px-4 sm:px-6 lg:px-8">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300/30 dark:bg-pink-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-2 mb-4">
                        <span className="text-2xl">🌟</span>
                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Discover Amazing Communities</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Featured Groups
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Join passionate communities and connect with people who share your interests
                    </p>
                </div>

                {/* Groups Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuredGroups.length === 0 ? [1, 2, 3, 4, 5, 6].map(num => (
                        <GroupCardSkeleton key={num} />
                    )) : featuredGroups.map(group => (
                        <GroupCard key={group._id} group={group} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="group relative overflow-hidden rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                        <span className="relative z-10">Explore All Groups</span>
                        <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedGroupsSection;
