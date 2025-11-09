import React from "react";
import { Users, Sparkles, Heart, Calendar, Star, Rocket, Target } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen py-20 px-5 sm:px-10 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-hidden">
      
      {/* ✅ Floating Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating icons */}
        <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-300/60 animate-bounce" />
        <Heart className="absolute bottom-1/3 left-1/4 w-7 h-7 text-pink-300/60 animate-bounce" style={{ animationDuration: "4s" }} />
        <Star className="absolute top-1/3 left-1/3 w-8 h-8 text-purple-300/60 animate-bounce" style={{ animationDuration: "3.5s" }} />
      </div>

      {/* ✅ CONTENT CONTAINER */}
      <div className="relative max-w-6xl mx-auto text-center text-white">
        
        {/* Page Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          About  
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            {" "}
            HobbyHub Events
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-200 leading-relaxed mb-16">
          We believe hobbies make life meaningful. HobbyHub was built to help people  
          connect, share passions, and turn their interests into unforgettable experiences.  
          Whether you're into art, fitness, gaming, dance, reading, or adventure—this is  
          your world to explore.
        </p>

        {/* ✅ Mission / Vision Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all shadow-xl">
            <div className="mb-5 inline-flex rounded-full bg-pink-500/40 p-4">
              <Target className="w-7 h-7 text-pink-200" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-200">
              To help individuals express creativity, discover passions, and build meaningful
              communities through hobby-driven events.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all shadow-xl">
            <div className="mb-5 inline-flex rounded-full bg-purple-500/40 p-4">
              <Rocket className="w-7 h-7 text-purple-200" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Why We Exist</h3>
            <p className="text-gray-200">
              Because hobbies bring joy, reduce stress, and connect people—yet finding
              groups and events was always difficult… until now.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all shadow-xl">
            <div className="mb-5 inline-flex rounded-full bg-blue-500/40 p-4">
              <Users className="w-7 h-7 text-blue-200" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Our Community</h3>
            <p className="text-gray-200">
              Over 50,000+ members, 2,500+ active groups, and thousands of events built
              around creativity, passion, and shared interests.
            </p>
          </div>

        </div>

        {/* ✅ Timeline / Story Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
          Our Story
        </h2>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl max-w-4xl mx-auto shadow-xl">
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
            HobbyHub started with a simple idea—  
            <span className="text-pink-300 font-semibold">
              people deserve a place to enjoy what they love.
            </span>{" "}
            What began as a small group platform soon evolved into a full ecosystem for  
            event discovery, group management, and creative collaboration.  
          </p>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
            Today, we help thousands find their tribe, express their passions, and  
            build lifelong friendships through meaningful hobby-based gatherings.
          </p>
        </div>

        {/* ✅ Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p className="text-4xl font-extrabold text-white">50K+</p>
            <p className="text-gray-300">Members</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p className="text-4xl font-extrabold text-white">2.5K+</p>
            <p className="text-gray-300">Groups</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 col-span-2 sm:col-span-1">
            <p className="text-4xl font-extrabold text-white">15K+</p>
            <p className="text-gray-300">Events Organized</p>
          </div>
        </div>

      </div>

      {/* Fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}
