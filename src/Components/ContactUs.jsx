import React from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Heart, Star } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen py-20 px-5 sm:px-10 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-hidden">

      {/* ✅ Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-16 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Grid Pattern */}
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

        {/* Floating Icons */}
        <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-300/60 animate-bounce" />
        <Heart className="absolute bottom-1/3 left-1/4 w-7 h-7 text-pink-300/60 animate-bounce" style={{ animationDuration: "4s" }} />
        <Star className="absolute top-1/3 left-1/3 w-8 h-8 text-purple-300/60 animate-bounce" style={{ animationDuration: "3.5s" }} />
      </div>

      {/* ✅ CONTENT CONTAINER */}
      <div className="relative max-w-6xl mx-auto text-center text-white">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Contact  
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            {" "}
            HobbyHub
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mb-14 text-lg sm:text-xl text-gray-200 leading-relaxed">
          We're here to help! Whether you have questions, partnership ideas,  
          event inquiries, or need support — just reach out.
        </p>

        {/* ✅ Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all shadow-xl">
            <Mail className="w-10 h-10 mx-auto text-pink-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-200 text-sm">support@hobbyhub.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all shadow-xl">
            <Phone className="w-10 h-10 mx-auto text-purple-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-200 text-sm">+1 234 567 890</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all shadow-xl">
            <MapPin className="w-10 h-10 mx-auto text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-200 text-sm">New York, USA</p>
          </div>

        </div>

        {/* ✅ Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-10 sm:p-14 max-w-4xl mx-auto">
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Send Us a Message
          </h2>

          <form className="space-y-6 text-left">
            {/* Name */}
            <div>
              <label className="text-white text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="mt-2 w-full px-5 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="mt-2 w-full px-5 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white text-sm font-medium">Message</label>
              <textarea
                rows="5"
                className="mt-2 w-full px-5 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button className="group relative w-full sm:w-auto mt-4 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </form>

        </div>

        {/* ✅ Bottom Info */}
        <div className="mt-16 text-center text-gray-200">
          <p className="text-sm">We reply within 24 hours • Available 7 days a week</p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}
