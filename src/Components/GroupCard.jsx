import React from 'react';
import { useNavigate } from 'react-router';
import { Calendar, Users, ArrowRight } from 'lucide-react';

const GroupCard = ({ group }) => {
    const navigate = useNavigate();
    const { _id, name, hobbyCategory, description, photoURL, date } = group;

    const handleViewDetails = (id) => {
        navigate(`/group/${id}`);
    };

    return (
        <div className="group relative h-full">
            {/* Card Container with Glass Effect */}
            <div className="h-full flex flex-col bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                
                {/* Image Container with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={photoURL}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                            <span>✨</span>
                            {hobbyCategory}
                        </span>
                    </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                        {name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1">
                        {description}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 text-purple-500" />
                            <span>Join by: <span className="font-medium text-gray-700 dark:text-gray-300">{date}</span></span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={() => handleViewDetails(_id)}
                        className="w-full group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View Details
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                    </button>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
};

export default GroupCard;