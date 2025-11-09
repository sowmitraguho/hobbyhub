import React from "react";
import { AuthContext } from "../Firebase/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Mail, Lock, Sparkles, Heart, Star, LogIn, Chrome } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleSignIn, signIn } = React.useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                navigate(location?.state || "/");
            })
            .catch((error) => console.log(error.message));
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());

        signIn(email, password)
            .then((result) => {
                Swal.fire({
                    title: "Login Successful!",
                    icon: "success",
                });
                navigate(location?.state || "/");
            })
            .catch((error) => {
                Swal.fire({
                    title: "Wrong Email or Password!",
                    icon: "warning",
                });
            });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-hidden">

            {/* ✅ Background Effects */}
            <div className="absolute inset-0 pointer-events-none">

                {/* Floating Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-16 right-16 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />

                {/* Floating Icons */}
                <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-300/60 animate-bounce" />
                <Heart className="absolute bottom-1/3 left-1/4 w-7 h-7 text-pink-300/60 animate-bounce" style={{ animationDuration: "3.8s" }} />
                <Star className="absolute top-1/3 left-1/3 w-8 h-8 text-purple-300/60 animate-bounce" style={{ animationDuration: "3.2s" }} />

                {/* Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>
            </div>

            {/* ✅ Main Content */}
            <div className="relative w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center z-10">

                {/* ✅ Left Text Section */}
                <div className="text-white text-center lg:text-left px-4">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        Welcome Back to{" "}
                        <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                            HobbyHub
                        </span>
                    </h1>

                    <p className="text-lg text-gray-200 leading-relaxed">
                        Rediscover your passions, join amazing groups, explore events, and connect
                        with hobby lovers around the world.
                    </p>
                </div>

                {/* ✅ Login Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Sign In
                    </h2>

                    <form onSubmit={handleSignIn} className="space-y-6">

                        {/* Email */}
                        <div>
                            <label className="text-gray-200 text-sm font-medium">Email</label>
                            <div className="relative mt-2">
                                <Mail className="absolute top-3 left-4 text-gray-300" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-12 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
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
                                    className="w-full px-12 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Register */}
                        <p className="text-gray-300 text-sm">
                            Don’t have an account?{" "}
                            <Link to="/signup" className="text-pink-300 hover:text-pink-400 underline">
                                Register Now
                            </Link>
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition transform shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2"
                        >
                            <LogIn size={20} /> Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 border-t border-white/20"></div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full py-3 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition shadow-lg"
                    >
                        <Chrome size={20} /> Login with Google
                    </button>
                </div>
            </div>

            {/* Fade Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
    );
};

export default Login;