import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, Heart, Star, TrendingUp, Award } from 'lucide-react';

export default function StatisticsSocialProofSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const statistics = [
        {
            id: 1,
            icon: Users,
            number: "50,000",
            suffix: "+",
            label: "Active Members",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-500/20 to-pink-500/20",
            description: "Join our thriving community"
        },
        {
            id: 2,
            icon: Calendar,
            number: "15,000",
            suffix: "+",
            label: "Events Hosted",
            gradient: "from-pink-500 to-rose-500",
            bgGradient: "from-pink-500/20 to-rose-500/20",
            description: "Monthly gatherings & meetups"
        },
        {
            id: 3,
            icon: Heart,
            number: "2,500",
            suffix: "+",
            label: "Active Groups",
            gradient: "from-rose-500 to-orange-500",
            bgGradient: "from-rose-500/20 to-orange-500/20",
            description: "Across diverse interests"
        },
        {
            id: 4,
            icon: Star,
            number: "4.9",
            suffix: "/5",
            label: "Average Rating",
            gradient: "from-orange-500 to-yellow-500",
            bgGradient: "from-orange-500/20 to-yellow-500/20",
            description: "From satisfied users"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Photography Enthusiast",
            avatar: "https://i.pravatar.cc/150?img=1",
            content: "HobbyHub helped me find an amazing photography group! We meet every weekend and I've learned so much. The community is incredibly supportive.",
            rating: 5,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Fitness Coach",
            avatar: "https://i.pravatar.cc/150?img=2",
            content: "Creating my fitness group was super easy. Now I have 50+ members and we organize weekly workouts. Best decision ever!",
            rating: 5,
            gradient: "from-pink-500 to-rose-500"
        },
        {
            id: 3,
            name: "Emma Davis",
            role: "Book Club Organizer",
            avatar: "https://i.pravatar.cc/150?img=3",
            content: "I love how simple it is to manage our book club events. The platform makes scheduling and communication effortless!",
            rating: 5,
            gradient: "from-rose-500 to-orange-500"
        }
    ];

    const achievements = [
        { icon: Award, text: "Best Community Platform 2024" },
        { icon: TrendingUp, text: "Fastest Growing Hobby Network" },
        { icon: Heart, text: "10M+ Connections Made" }
    ];

    // Animated counter hook
    const useCounter = (end, duration = 2000) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let startTime;
            const endValue = parseFloat(end.replace(/,/g, ''));
            
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = (currentTime - startTime) / duration;

                if (progress < 1) {
                    setCount(Math.floor(endValue * progress));
                    requestAnimationFrame(animate);
                } else {
                    setCount(endValue);
                }
            };

            requestAnimationFrame(animate);
        }, [isVisible, end, duration]);

        return count;
    };

    return (
        <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 mb-6 backdrop-blur-sm">
                        <span className="text-2xl">🏆</span>
                        <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Trusted by Thousands
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Join a Thriving Community
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Thousands of people have already transformed their hobbies into meaningful connections
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {statistics.map((stat, index) => {
                        const StatIcon = stat.icon;
                        const animatedNumber = useCounter(stat.number);
                        
                        return (
                            <div
                                key={stat.id}
                                className="group relative"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className={`mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.bgGradient} group-hover:scale-110 transition-transform duration-300`}>
                                        <StatIcon className={`w-8 h-8 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                                    </div>

                                    {/* Number */}
                                    <div className="mb-2">
                                        <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                            {stat.number.includes('.') ? animatedNumber.toFixed(1) : animatedNumber.toLocaleString()}
                                        </span>
                                        <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                            {stat.suffix}
                                        </span>
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {stat.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {stat.description}
                                    </p>

                                    {/* Decorative Corner */}
                                    <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${stat.bgGradient} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Achievements Bar */}
                <div className="mb-20 flex flex-wrap justify-center gap-4 md:gap-8">
                    {achievements.map((achievement, index) => {
                        const AchievementIcon = achievement.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            >
                                <AchievementIcon className="w-5 h-5 text-yellow-500" />
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {achievement.text}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Testimonials Section */}
                <div className="mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            What Our Members Say
                        </span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} p-0.5`}>
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center">
                    <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Journey Today
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Join 50,000+ members who have found their community
                    </p>
                </div>
            </div>
        </div>
    );
}