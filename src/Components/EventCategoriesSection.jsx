import React, { useState } from 'react';
import { 
    Palette, 
    Music, 
    Dumbbell, 
    Camera, 
    Book, 
    Gamepad2, 
    ChefHat, 
    Plane,
    Code,
    TreePine,
    Brush,
    Guitar
} from 'lucide-react';

export default function EventCategoriesSection() {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const categories = [
        {
            id: 1,
            name: "Arts & Crafts",
            icon: Palette,
            count: "240+ Groups",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            darkBgGradient: "from-purple-900/20 to-pink-900/20",
            emoji: "🎨"
        },
        {
            id: 2,
            name: "Music & Dance",
            icon: Music,
            count: "180+ Groups",
            gradient: "from-pink-500 to-rose-500",
            bgGradient: "from-pink-50 to-rose-50",
            darkBgGradient: "from-pink-900/20 to-rose-900/20",
            emoji: "🎵"
        },
        {
            id: 3,
            name: "Sports & Fitness",
            icon: Dumbbell,
            count: "320+ Groups",
            gradient: "from-rose-500 to-orange-500",
            bgGradient: "from-rose-50 to-orange-50",
            darkBgGradient: "from-rose-900/20 to-orange-900/20",
            emoji: "⚡"
        },
        {
            id: 4,
            name: "Photography",
            icon: Camera,
            count: "150+ Groups",
            gradient: "from-orange-500 to-amber-500",
            bgGradient: "from-orange-50 to-amber-50",
            darkBgGradient: "from-orange-900/20 to-amber-900/20",
            emoji: "📸"
        },
        {
            id: 5,
            name: "Reading & Writing",
            icon: Book,
            count: "200+ Groups",
            gradient: "from-amber-500 to-yellow-500",
            bgGradient: "from-amber-50 to-yellow-50",
            darkBgGradient: "from-amber-900/20 to-yellow-900/20",
            emoji: "📚"
        },
        {
            id: 6,
            name: "Gaming",
            icon: Gamepad2,
            count: "280+ Groups",
            gradient: "from-yellow-500 to-green-500",
            bgGradient: "from-yellow-50 to-green-50",
            darkBgGradient: "from-yellow-900/20 to-green-900/20",
            emoji: "🎮"
        },
        {
            id: 7,
            name: "Cooking & Food",
            icon: ChefHat,
            count: "210+ Groups",
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50",
            darkBgGradient: "from-green-900/20 to-emerald-900/20",
            emoji: "🍳"
        },
        {
            id: 8,
            name: "Travel & Adventure",
            icon: Plane,
            count: "190+ Groups",
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-50 to-teal-50",
            darkBgGradient: "from-emerald-900/20 to-teal-900/20",
            emoji: "✈️"
        },
        {
            id: 9,
            name: "Tech & Coding",
            icon: Code,
            count: "160+ Groups",
            gradient: "from-teal-500 to-cyan-500",
            bgGradient: "from-teal-50 to-cyan-50",
            darkBgGradient: "from-teal-900/20 to-cyan-900/20",
            emoji: "💻"
        },
        {
            id: 10,
            name: "Nature & Outdoors",
            icon: TreePine,
            count: "140+ Groups",
            gradient: "from-cyan-500 to-blue-500",
            bgGradient: "from-cyan-50 to-blue-50",
            darkBgGradient: "from-cyan-900/20 to-blue-900/20",
            emoji: "🌲"
        },
        {
            id: 11,
            name: "Design & UI/UX",
            icon: Brush,
            count: "130+ Groups",
            gradient: "from-blue-500 to-indigo-500",
            bgGradient: "from-blue-50 to-indigo-50",
            darkBgGradient: "from-blue-900/20 to-indigo-900/20",
            emoji: "✨"
        },
        {
            id: 12,
            name: "Performance Arts",
            icon: Guitar,
            count: "120+ Groups",
            gradient: "from-indigo-500 to-purple-500",
            bgGradient: "from-indigo-50 to-purple-50",
            darkBgGradient: "from-indigo-900/20 to-purple-900/20",
            emoji: "🎭"
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 mb-6 backdrop-blur-sm">
                        <span className="text-2xl">🎯</span>
                        <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Find Your Passion
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Explore Categories
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover groups across diverse interests and connect with communities that match your hobbies
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            {/* Category Card */}
                            <div className={`relative h-full bg-gradient-to-br ${category.bgGradient} dark:${category.darkBgGradient} backdrop-blur-md rounded-2xl p-6 border border-white/40 dark:border-gray-700/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}>
                                
                                {/* Hover Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                
                                {/* Icon Container */}
                                <div className={`relative z-10 mb-4 inline-flex p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    <category.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </div>

                                {/* Emoji Badge */}
                                <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
                                    {category.emoji}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                                        {category.name}
                                    </h3>
                                    
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                                        {category.count}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Decorative Corner */}
                                <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${category.gradient} opacity-5 rounded-br-full`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                        Can't find your hobby? <span className="font-semibold text-purple-600 dark:text-purple-400">Create your own category!</span>
                    </p>
                    
                    <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                        <span className="relative z-10 flex items-center gap-2">
                            Browse All Categories
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        </div>
    );
}