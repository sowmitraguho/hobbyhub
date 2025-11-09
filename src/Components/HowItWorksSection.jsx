import React from 'react';
import { UserPlus, Users, Calendar, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
    const steps = [
        {
            icon: UserPlus,
            title: "Create Your Group",
            description: "Start by creating a group around your favorite hobby. Add a catchy name, description, and photo to attract like-minded enthusiasts.",
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-500/20 to-pink-500/20",
            delay: "0"
        },
        {
            icon: Users,
            title: "Invite Members",
            description: "Share your group with friends or let others discover it. Build a vibrant community of people who share your passion.",
            color: "from-pink-500 to-rose-500",
            bgColor: "from-pink-500/20 to-rose-500/20",
            delay: "100"
        },
        {
            icon: Calendar,
            title: "Plan Events",
            description: "Organize meetups, workshops, or hangouts. Set dates, locations, and manage RSVPs all in one place.",
            color: "from-rose-500 to-orange-500",
            bgColor: "from-rose-500/20 to-orange-500/20",
            delay: "200"
        },
        {
            icon: Sparkles,
            title: "Have Fun Together",
            description: "Connect, learn, and create amazing memories with your community. Turn your hobby into unforgettable experiences.",
            color: "from-orange-500 to-yellow-500",
            bgColor: "from-orange-500/20 to-yellow-500/20",
            delay: "300"
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 mb-6 backdrop-blur-sm">
                        <span className="text-2xl">🚀</span>
                        <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Simple & Effective
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            How It Works
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Get started in minutes and turn your hobbies into thriving communities
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{ animationDelay: `${step.delay}ms` }}
                        >
                            {/* Connecting Line (hidden on mobile, visible on lg) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 transform -translate-x-1/2 z-0">
                                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-pink-400 dark:bg-pink-600 rounded-full animate-pulse" />
                                </div>
                            )}

                            {/* Step Card */}
                            <div className="relative h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 z-10">
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon Container */}
                                <div className={`mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.bgColor} backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className={`w-8 h-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Decorative Corner */}
                                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${step.bgColor} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                        <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started Now
                                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </button>

                        <button className="rounded-full border-2 border-purple-300 dark:border-purple-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-purple-700 dark:text-purple-300 transition-all hover:scale-105 hover:border-purple-500 hover:bg-white/70 dark:hover:bg-gray-800/70">
                            Watch Demo
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                        No credit card required • Free to start • Join thousands of communities
                    </p>
                </div>
            </div>
        </div>
    );
}