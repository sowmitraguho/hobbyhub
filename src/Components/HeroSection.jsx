import React from 'react';
import { Calendar, Users, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative py-12 min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://ineducationonline.org/wp-content/uploads/2023/01/How-hobbies-are-important-in-a-persons-life.png')`
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 animate-pulse" />
      
      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">Discover Your Passion</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Turn Your{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hobbies
            </span>
            <br />
            Into Amazing Events
          </h1>
          
          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl">
            Connect with like-minded enthusiasts, organize exciting gatherings, and transform your passions into unforgettable experiences
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 sm:w-auto">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            
            <button className="w-full rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-white/50 hover:bg-white/20 sm:w-auto">
              Explore Events
            </button>
          </div>
          
          {/* Feature Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105">
              <div className="mb-4 inline-flex rounded-full bg-purple-500/30 p-3">
                <Calendar className="h-6 w-6 text-purple-200" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Easy Planning</h3>
              <p className="text-sm text-gray-300">Create and manage events effortlessly with our intuitive tools</p>
            </div>
            
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105">
              <div className="mb-4 inline-flex rounded-full bg-pink-500/30 p-3">
                <Users className="h-6 w-6 text-pink-200" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Find Your Tribe</h3>
              <p className="text-sm text-gray-300">Connect with people who share your interests and passions</p>
            </div>
            
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105">
              <div className="mb-4 inline-flex rounded-full bg-blue-500/30 p-3">
                <Sparkles className="h-6 w-6 text-blue-200" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Make Memories</h3>
              <p className="text-sm text-gray-300">Transform ordinary hobbies into extraordinary experiences</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}