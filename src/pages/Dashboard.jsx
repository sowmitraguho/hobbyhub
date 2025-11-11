import React, { use, useEffect, useState } from 'react';
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
    ChevronRight
} from 'lucide-react';
import { AuthContext } from '../Firebase/AuthContext';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [myGroups, setMyGroups] = useState([]);
    const { loggedInUser, setLoggedInUser, logOut } = use(AuthContext);
    const userName = loggedInUser?.displayName || 'John Doe';
    const userEmail = loggedInUser?.email || '';
    //const [myGroups, setMyGroups] = useState([]);
//const myGroups = useLoaderData();
useEffect(() => {
    fetch(`https://hobby-hub-server.onrender.com/api/groups/my-groups/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyGroups(data))
      .catch((error) => console.error('Error fetching my groups:', error));
  }, [userEmail]);
        const statsCards = [
            {
                id: 1,
                title: 'Total Groups',
                value: myGroups.length,
                change: '+2 this month',
                icon: Users,
                linear: 'from-purple-500 to-pink-500',
                bglinear: 'from-purple-50 to-pink-50',
                darkBglinear: 'from-purple-900/20 to-pink-900/20'
            },
            {
                id: 2,
                title: 'Upcoming Events',
                value: '12',
                change: '3 this week',
                icon: Calendar,
                linear: 'from-pink-500 to-rose-500',
                bglinear: 'from-pink-50 to-rose-50',
                darkBglinear: 'from-pink-900/20 to-rose-900/20'
            },
            {
                id: 3,
                title: 'Total Members',
                value: '248',
                change: '+18 this month',
                icon: TrendingUp,
                linear: 'from-rose-500 to-orange-500',
                bglinear: 'from-rose-50 to-orange-50',
                darkBglinear: 'from-rose-900/20 to-orange-900/20'
            },
            {
                id: 4,
                title: 'Engagement',
                value: '94%',
                change: '+5% increase',
                icon: Heart,
                linear: 'from-orange-500 to-yellow-500',
                bglinear: 'from-orange-50 to-yellow-50',
                darkBglinear: 'from-orange-900/20 to-yellow-900/20'
            }
        ];
    
        const upcomingEvents = [
            {
                id: 1,
                title: 'Photo Walk Downtown',
                date: 'Nov 15, 2024',
                time: '10:00 AM',
                attendees: 12,
                group: 'Photography Enthusiasts'
            },
            {
                id: 2,
                title: 'Morning Run & Breakfast',
                date: 'Nov 16, 2024',
                time: '7:00 AM',
                attendees: 8,
                group: 'Morning Runners'
            },
            {
                id: 3,
                title: 'Book Discussion: Fiction',
                date: 'Nov 18, 2024',
                time: '6:00 PM',
                attendees: 15,
                group: 'Book Club Society'
            }
        ];
  return (
                <main className="p-4 sm:p-6 lg:p-8">
                    {/* Welcome Banner */}
                    <div className="mb-8 relative bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-6 h-6 text-yellow-300" />
                                <span className="text-yellow-300 font-semibold">Welcome back!</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">Hey, {userName} 👋</h2>
                            <p className="text-white/90 mb-4">You have 3 upcoming events this week. Let's make them amazing!</p>
                            {/* <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:scale-105 transition-all">
                                View Calendar
                            </button> */}
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {statsCards.map((stat) => {
                            const StatIcon = stat.icon;
                            return (
                                <div
                                    key={stat.id}
                                    className={`bg-linear-to-br ${stat.bglinear} dark:${stat.darkBglinear} backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.linear} flex items-center justify-center shadow-lg`}>
                                            <StatIcon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                        {stat.title}
                                    </h3>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3 text-green-500" />
                                        {stat.change}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Recent Groups */}
                        <div className="lg:col-span-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Groups</h3>
                                <button className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-4">
                                {myGroups.map((group) => (
                                    <div
                                        key={group.id}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all cursor-pointer group"
                                    >
                                        <img
                                            src={group.photoURL}
                                            alt={group.name}
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {group.name}
                                            </h4>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    {group.hobbyCategory} 
                                                </span>
                                                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                                                    {group.category}
                                                </span>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h3>
                            <div className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="p-4 rounded-xl bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800/30 hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            {event.title}
                                        </h4>
                                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                            <p className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {event.date} at {event.time}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                {event.attendees} attending
                                            </p>
                                        </div>
                                        <p className="text-xs text-purple-600 dark:text-purple-400 mt-2 font-medium">
                                            {event.group}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
  )
}
