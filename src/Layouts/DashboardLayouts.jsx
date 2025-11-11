import React, { use, useContext, useEffect, useState } from 'react';
import {
    LayoutDashboard,
    Users,
    Calendar,
    Settings,
    Bell,
    Search,
    Plus,
    TrendingUp,
    Heart,
    MessageSquare,
    LogOut,
    Menu,
    X,
    Home,
    Sparkles,
    BarChart3,
    User,
    ChevronRight,
    Moon,
    Sun
} from 'lucide-react';
import { Link, Outlet } from 'react-router';
import { AuthContext } from '../Firebase/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContext';

export default function DashboardLayout() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const { loggedInUser, logOut } = use(AuthContext);
    const userName = loggedInUser?.displayName || 'John Doe';
    const userEmail = loggedInUser?.email || '';
    const sidebarItems = [
        { id: 'overview', icon: LayoutDashboard, label: 'Overview', badge: null, navigateTo: '/dashboard' },
        { id: 'mygroups', icon: Users, label: 'My Groups', badge: null, navigateTo: `/dashboard/mygroup/${userEmail}` },
        { id: 'creategroup', icon: Calendar, label: 'Create Group', badge: null, navigateTo: '/dashboard/creategroup' },
        // { id: 'messages', icon: MessageSquare, label: 'Messages', badge: '3', navigateTo: '/dashboard/messages' },
        // { id: 'analytics', icon: BarChart3, label: 'Analytics', badge: null, navigateTo: '/dashboard/analytics' },
        // { id: 'profile', icon: User, label: 'Profile', badge: null, navigateTo: '/dashboard/profile' },
        // { id: 'settings', icon: Settings, label: 'Settings', badge: null, navigateTo: '/dashboard/settings' },
    ];

    const handleToggle = (e) => {
        setTheme(e.target.checked ? 'dark' : 'light');
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64`}>
                <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <Link to='/'>
                                <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                                    HobbyHub
                                </h1>
                            </Link>
                            {/* Theme Toggle */}
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={theme === "dark"}
                                    onChange={handleToggle}
                                    className="hidden"
                                />
                                <div className="w-12 h-6 bg-white/20 rounded-full relative transition">
                                    <div
                                        className={`${theme === "dark" ? "translate-x-6" : "translate-x-1"
                                            } absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-linear-to-br from-purple-500 to-pink-500 rounded-full transition`}
                                    />
                                </div>
                                {theme === "dark" ? (
                                    <Moon className="ml-2 text-white" size={18} />
                                ) : (
                                    <Sun className="ml-2 text-yellow-300" size={18} />
                                )}
                            </label>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 overflow-y-auto">
                        <ul className="space-y-2">
                            {sidebarItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                                ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-5 h-5" />
                                                <Link to={item.navigateTo}>
                                                    <span className="font-medium">{item.label}</span>
                                                </Link>
                                            </div>
                                            {item.badge && (
                                                <span className={`px-2 py-1 text-xs font-bold rounded-full ${activeTab === item.id
                                                    ? 'bg-white/30'
                                                    : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                                                    }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* User Profile */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 p-0.5">
                                <img
                                    src={loggedInUser?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar-1.png'}
                                    alt="User"
                                    className="w-full h-full rounded-full"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{userName}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{userEmail}</p>
                            </div>
                        </div>
                        <button onClick={logOut} className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:ml-64">
                {/* Top Header */}

                {/* Content Area */}
                <main className="p-6">
                    <Outlet />
                </main>

            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}