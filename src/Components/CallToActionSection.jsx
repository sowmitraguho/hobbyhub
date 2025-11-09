import React, { useState } from 'react';
import { ArrowRight, Sparkles, Users, Calendar, Heart, Check, Zap, Gift, Star } from 'lucide-react';

export default function CallToActionSection() {
    const [email, setEmail] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const benefits = [
        { icon: Users, text: "Join 50,000+ active members" },
        { icon: Calendar, text: "Unlimited events & meetups" },
        { icon: Heart, text: "Connect with like-minded people" },
        { icon: Zap, text: "Easy group management tools" }
    ];

    const features = [
        "Create unlimited groups",
        "Host unlimited events",
        "Advanced scheduling tools",
        "Member management",
        "Chat & messaging",
        "Photo & video sharing"
    ];

    const handleGetStarted = () => {
        console.log('Email submitted:', email);
        // Add your email submission logic here
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                {/* Floating Icons */}
                <div className="absolute top-1/4 right-1/4 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                    <Sparkles className="w-8 h-8 text-yellow-300/50" />
                </div>
                <div className="absolute bottom-1/3 left-1/4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <Heart className="w-6 h-6 text-pink-300/50" />
                </div>
                <div className="absolute top-1/3 left-1/3 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}>
                    <Star className="w-7 h-7 text-purple-300/50" />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Main CTA Container */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />
                    
                    <div className="relative grid lg:grid-cols-2 gap-12 p-8 md:p-16">
                        {/* Left Side - Content */}
                        <div className="flex flex-col justify-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 mb-6 w-fit">
                                <Gift className="w-4 h-4 text-white" />
                                <span className="text-sm font-bold text-white">Limited Time Offer</span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                                Start Your
                                <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                                    Hobby Journey
                                </span>
                                Today!
                            </h2>

                            {/* Description */}
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                Join thousands of passionate people turning their hobbies into thriving communities. Create your first group in less than 2 minutes!
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-4 mb-8">
                                {benefits.map((benefit, index) => {
                                    const BenefitIcon = benefit.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-3 text-white">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                                <BenefitIcon className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-medium">{benefit.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Email Input and Button */}
                            <div className="mb-6">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                    />
                                    <button
                                        onClick={handleGetStarted}
                                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 whitespace-nowrap"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Get Started Free
                                            <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </button>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                                <div className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-green-400" />
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-green-400" />
                                    <span>Free forever plan</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-green-400" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Features Card */}
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md">
                                {/* Features Card */}
                                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                                            <Sparkles className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                            Everything You Need
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            All features included for free
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3">
                                        {features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3 group">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pricing Badge */}
                                    <div className="mt-8 text-center">
                                        <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full px-6 py-3">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Forever Free</p>
                                            <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                                $0
                                                <span className="text-lg">/month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Mini Cards */}
                                <div className="grid grid-cols-3 gap-3 mt-6">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                                        <p className="text-2xl font-bold text-white">50K+</p>
                                        <p className="text-xs text-gray-300">Members</p>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                                        <p className="text-2xl font-bold text-white">2.5K+</p>
                                        <p className="text-xs text-gray-300">Groups</p>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                                        <p className="text-2xl font-bold text-white">15K+</p>
                                        <p className="text-xs text-gray-300">Events</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Secondary CTA */}
                <div className="mt-12 text-center">
                    <p className="text-xl text-white mb-4">
                        Already have an account?
                    </p>
                    <button className="text-white font-semibold hover:text-pink-300 transition-colors underline decoration-2 underline-offset-4">
                        Sign in here
                    </button>
                </div>

                {/* Social Proof Bar */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/40?img=${i}`}
                                    alt="User"
                                    className="w-8 h-8 rounded-full border-2 border-purple-900"
                                />
                            ))}
                        </div>
                        <span className="text-sm">Join 50,000+ members</span>
                    </div>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm ml-2">4.9/5 rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">Setup in 2 minutes</span>
                    </div>
                </div>
            </div>
        </div>
    );
}