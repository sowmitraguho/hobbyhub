import React, { useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight, Heart, Users, Calendar } from 'lucide-react';

export default function TestimonialsSuccessStoriesSection() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [selectedStory, setSelectedStory] = useState(null);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Mitchell",
            role: "Photography Group Leader",
            location: "San Francisco, CA",
            avatar: "https://i.pravatar.cc/150?img=5",
            rating: 5,
            quote: "HobbyHub transformed my passion into a thriving community. What started as a small photography group has grown to 150+ members. We've organized 20+ photo walks and even had our first exhibition!",
            image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
            stats: {
                members: 150,
                events: 20,
                duration: "8 months"
            },
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            name: "Marcus Johnson",
            role: "Fitness Enthusiast",
            location: "Austin, TX",
            avatar: "https://i.pravatar.cc/150?img=12",
            rating: 5,
            quote: "I was looking for a workout buddy and found an entire fitness family! Our morning running group has become the highlight of my week. Lost 30 pounds and gained lifelong friends.",
            image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
            stats: {
                members: 85,
                events: 45,
                duration: "1 year"
            },
            gradient: "from-pink-500 to-rose-500"
        },
        {
            id: 3,
            name: "Emily Chen",
            role: "Book Club Organizer",
            location: "Seattle, WA",
            avatar: "https://i.pravatar.cc/150?img=9",
            rating: 5,
            quote: "Creating our book club on HobbyHub was the best decision ever! We've read 30+ books together, had amazing discussions, and even hosted author meetups. The platform makes everything so easy.",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
            stats: {
                members: 65,
                events: 32,
                duration: "10 months"
            },
            gradient: "from-rose-500 to-orange-500"
        },
        {
            id: 4,
            name: "David Park",
            role: "Gaming Community Manager",
            location: "Los Angeles, CA",
            avatar: "https://i.pravatar.cc/150?img=15",
            rating: 5,
            quote: "Our gaming clan went from casual Discord chats to organized tournaments thanks to HobbyHub. We now host weekly gaming nights and have members from 5 different states!",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
            stats: {
                members: 200,
                events: 50,
                duration: "1.5 years"
            },
            gradient: "from-orange-500 to-yellow-500"
        }
    ];

    const successStories = [
        {
            id: 1,
            title: "From Solo Hobbyist to Community Leader",
            name: "Alex Rivera",
            hobby: "Cooking & Baking",
            avatar: "https://i.pravatar.cc/150?img=20",
            story: "Started with just 3 friends sharing recipes. Now we're a 100-member cooking club hosting monthly potlucks and charity bake sales. We've raised $5,000 for local food banks!",
            before: "Cooking alone at home",
            after: "Leading a 100-member community",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
            gradient: "from-purple-500 to-pink-500",
            impact: ["100+ Members", "$5K Raised", "12 Events/Month"]
        },
        {
            id: 2,
            title: "Turning Art Passion into Exhibition",
            name: "Jessica Lane",
            hobby: "Digital Art",
            avatar: "https://i.pravatar.cc/150?img=25",
            story: "What began as sharing my art online became a collaborative art collective. We've had 3 gallery showings and sold over 50 pieces collectively!",
            before: "Solo digital artist",
            after: "Gallery exhibitions & sales",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
            gradient: "from-pink-500 to-rose-500",
            impact: ["3 Exhibitions", "50+ Artworks Sold", "40 Artists"]
        },
        {
            id: 3,
            title: "Music Jam Sessions to Festival Performers",
            name: "Chris Anderson",
            hobby: "Music Production",
            avatar: "https://i.pravatar.cc/150?img=30",
            story: "Our weekly jam sessions evolved into a full band. Thanks to HobbyHub's event management, we coordinated practice, found gigs, and performed at 2 music festivals!",
            before: "Practicing alone",
            after: "Festival performances",
            image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=600&h=400&fit=crop",
            gradient: "from-rose-500 to-orange-500",
            impact: ["2 Festivals", "15 Gigs", "10K Followers"]
        }
    ];

    const videoTestimonials = [
        {
            id: 1,
            name: "Rachel Green",
            role: "Yoga Instructor",
            thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
            duration: "2:30",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            name: "Tom Williams",
            role: "Chess Club Founder",
            thumbnail: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop",
            duration: "3:15",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            id: 3,
            name: "Lisa Martinez",
            role: "Gardening Enthusiast",
            thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
            duration: "2:45",
            gradient: "from-rose-500 to-orange-500"
        }
    ];

    const handlePrevTestimonial = () => {
        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNextTestimonial = () => {
        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-4 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 mb-6 backdrop-blur-sm">
                        <span className="text-2xl">💬</span>
                        <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Real Stories, Real Impact
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Success Stories
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        See how our members transformed their hobbies into thriving communities
                    </p>
                </div>

                {/* Featured Testimonial Carousel */}
                <div className="mb-20">
                    <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/50 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-64 md:h-auto">
                                <img
                                    src={testimonials[activeTestimonial].image}
                                    alt={testimonials[activeTestimonial].name}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${testimonials[activeTestimonial].gradient} opacity-20`} />
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                {/* Quote Icon */}
                                <Quote className={`w-12 h-12 mb-6 text-purple-400 opacity-50`} />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                                    "{testimonials[activeTestimonial].quote}"
                                </p>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Users className="w-4 h-4 text-purple-500" />
                                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                                            {testimonials[activeTestimonial].stats.members} Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="w-4 h-4 text-pink-500" />
                                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                                            {testimonials[activeTestimonial].stats.events} Events
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Heart className="w-4 h-4 text-rose-500" />
                                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                                            {testimonials[activeTestimonial].stats.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].gradient} p-0.5`}>
                                        <img
                                            src={testimonials[activeTestimonial].avatar}
                                            alt={testimonials[activeTestimonial].name}
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                                            {testimonials[activeTestimonial].name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonials[activeTestimonial].role}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-500">
                                            {testimonials[activeTestimonial].location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrevTestimonial}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </button>
                        <button
                            onClick={handleNextTestimonial}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === activeTestimonial
                                            ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                                            : 'bg-gray-400 dark:bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Success Stories Grid */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Transformation Stories
                        </span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {successStories.map((story) => (
                            <div
                                key={story.id}
                                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                                onClick={() => setSelectedStory(story)}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} opacity-40`} />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${story.gradient} text-white text-xs font-semibold`}>
                                        {story.hobby}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                                        {story.title}
                                    </h4>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                        {story.story}
                                    </p>

                                    {/* Impact Stats */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {story.impact.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${story.gradient} p-0.5`}>
                                            <img
                                                src={story.avatar}
                                                alt={story.name}
                                                className="w-full h-full rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-gray-900 dark:text-white">
                                                {story.name}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {story.before} → {story.after}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Testimonials */}
                <div className="mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Video Stories
                        </span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {videoTestimonials.map((video) => (
                            <div
                                key={video.id}
                                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-56">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />
                                    
                                    {/* Play Button */}
                                    <div className={`absolute inset-0 flex items-center justify-center`}>
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${video.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-black/70 text-white text-xs font-semibold">
                                        {video.duration}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                        {video.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {video.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center">
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                        Ready to write your own success story?
                    </p>
                    <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                        <span className="relative z-10">Start Your Journey</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        </div>
    );
}