import React, { useContext } from "react";
import { AuthContext } from "../Firebase/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { User, Mail, Lock, ImageIcon, Sparkles, Heart, Star, UserPlus } from "lucide-react";

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { name, email, password, photoURL } = Object.fromEntries(formData.entries());

        createUser(email, password)
            .then((result) => {
                if (result?.user?.uid) {
                    Swal.fire({
                        title: "Registration Successful!",
                        icon: "success",
                        timer: 2000,
                    });
                }
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        console.log("Profile updated!");
                    })
                    .catch((error) => console.log(error.message));
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-hidden">

            {/* ✅ Background Effects */}
            <div className="absolute inset-0 pointer-events-none">

                {/* Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-20 right-16 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />

                {/* Floating Icons */}
                <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-300/60 animate-bounce" />
                <Heart className="absolute bottom-1/3 left-1/4 w-7 h-7 text-pink-300/60 animate-bounce" style={{ animationDuration: "4s" }} />
                <Star className="absolute top-1/3 left-1/3 w-8 h-8 text-purple-300/60 animate-bounce" style={{ animationDuration: "3.5s" }} />

                {/* Grid */}
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
            </div>

            {/* ✅ Main Layout */}
            <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Text */}
                <div className="text-center lg:text-left text-white px-4">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        Become Part of
                        <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                            HobbyHub Community
                        </span>
                    </h1>

                    <p className="text-lg text-gray-200 leading-relaxed">
                        Create your account & start your journey into hobbies, creativity, and meaningful connections.
                        Explore, share, and join thousands of passionate people worldwide.
                    </p>
                </div>

                {/* ✅ Signup Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Create Account
                    </h2>

                    <form onSubmit={handleSignup} className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="text-gray-200 text-sm font-medium">Full Name</label>
                            <div className="relative mt-2">
                                <User className="absolute top-3 left-4 text-gray-300" size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full px-12 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="text-gray-200 text-sm font-medium">Photo URL</label>
                            <div className="relative mt-2">
                                <ImageIcon className="absolute top-3 left-4 text-gray-300" size={20} />
                                <input
                                    type="text"
                                    name="photoURL"
                                    placeholder="Enter photo URL"
                                    className="w-full px-12 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-gray-200 text-sm font-medium">Email</label>
                            <div className="relative mt-2">
                                <Mail className="absolute top-3 left-4 text-gray-300" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-12 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-gray-200 text-sm font-medium">Password</label>
                            <div className="relative mt-2">
                                <Lock className="absolute top-3 left-4 text-gray-300" size={20} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full px-12 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Login Link */}
                        <p className="text-gray-300 text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="text-pink-300 hover:text-pink-400 underline">
                                Login Now
                            </Link>
                        </p>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition transform shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2"
                        >
                            <UserPlus size={20} /> Sign Up
                        </button>
                    </form>
                </div>

            </div>

            {/* Fade Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
    );
};

export default SignUp;
