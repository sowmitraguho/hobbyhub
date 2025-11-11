import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

export default function LoadingPage() {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');

    // Simulate loading progress
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    // Update loading text based on progress
    useEffect(() => {
        if (progress < 25) {
            setLoadingText('Connecting to server...');
        } else if (progress < 50) {
            setLoadingText('Loading your data...');
        } else if (progress < 75) {
            setLoadingText('Preparing your experience...');
        } else if (progress < 100) {
            setLoadingText('Almost ready...');
        } else {
            setLoadingText('Welcome!');
        }
    }, [progress]);

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                {/* Floating Sparkles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-bounce"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-300/50" />
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                {/* Logo Animation */}
                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-white/10 backdrop-blur-md rounded-full p-8 border border-white/20">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
                            HobbyHub
                        </h1>
                    </div>
                </div>

                {/* Loading Spinner */}
                <div className="mb-8 relative">
                    {/* Outer Ring */}
                    <div className="w-32 h-32 rounded-full border-4 border-white/20"></div>
                    
                    {/* Animated Ring */}
                    <div className="absolute inset-0 w-32 h-32">
                        <svg className="w-full h-full animate-spin" style={{ animationDuration: '2s' }}>
                            <circle
                                cx="64"
                                cy="64"
                                r="60"
                                stroke="url(#gradient)"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="377"
                                strokeDashoffset={377 - (377 * progress) / 100}
                                className="transition-all duration-300"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#a855f7" />
                                    <stop offset="50%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '1.5s' }} />
                    </div>
                </div>

                {/* Progress Percentage */}
                <div className="mb-4">
                    <div className="text-6xl font-bold text-white">
                        {progress}%
                    </div>
                </div>

                {/* Loading Text */}
                <div className="mb-8">
                    <p className="text-xl text-white/90 font-medium animate-pulse">
                        {loadingText}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md">
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                    </div>
                </div>

                {/* Loading Dots */}
                <div className="mt-8 flex gap-2">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-3 h-3 rounded-full bg-white/60 animate-bounce"
                            style={{
                                animationDelay: `${i * 0.15}s`,
                                animationDuration: '0.6s'
                            }}
                        ></div>
                    ))}
                </div>

                {/* Fun Loading Messages */}
                <div className="mt-8 text-center max-w-md">
                    <p className="text-sm text-white/70 italic">
                        "Great things take time... but we're making it quick! 🚀"
                    </p>
                </div>

                {/* Features Showcase (Optional) */}
                <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
                    {[
                        { emoji: '🎨', text: 'Beautiful Groups' },
                        { emoji: '📅', text: 'Easy Events' },
                        { emoji: '👥', text: 'Great Community' }
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 opacity-0 animate-fadeIn"
                            style={{ animationDelay: `${i * 0.2}s`, animationFillMode: 'forwards' }}
                        >
                            <div className="text-3xl">{feature.emoji}</div>
                            <p className="text-sm text-white/70 text-center">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
            `}</style>
        </div>
    );
}