import React from "react";
import { useLoaderData } from "react-router";
import { Calendar, MapPin, Users, FolderOpen } from "lucide-react";

const GroupDetails = () => {
  const group = useLoaderData();

  const {
    name,
    hobbyCategory,
    description,
    photoURL,
    date,
    locatiopn,
    maxMember,
  } = group;

  const isJoinAvailable = new Date(date) >= new Date();

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Glass Card */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 dark:border-gray-700/50 p-8 md:p-12">
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-10">
            Group Details
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative group">
                <img
                  src={photoURL}
                  className="w-full max-w-lg rounded-2xl shadow-xl object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Hobby Category Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full shadow-lg">
                  ✨ {hobbyCategory}
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="space-y-6">
              {/* Group Title */}
              <h1 className="text-3xl md:text-4xl font-bold leading-snug dark:text-white">
                {name}
              </h1>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {description}
              </p>

              {/* Info List */}
              <div className="space-y-4 text-gray-700 dark:text-gray-300">

                <p className="flex items-center gap-3">
                  <FolderOpen className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold">Category:</span>
                  <span className="opacity-90">{hobbyCategory}</span>
                </p>

                <p className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">Max Members:</span>
                  <span className="opacity-90">{maxMember}</span>
                </p>

                <p className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">Meeting Location:</span>
                  <span className="opacity-90">
                    {locatiopn || "Not Provided"}
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-pink-500" />
                  <span className="font-semibold">Join Before:</span>
                  <span className="opacity-90">{date}</span>
                </p>

              </div>

              {/* Join Button */}
              {isJoinAvailable ? (
                <button className="mt-6 w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/40 transition-all">
                  Join Group
                </button>
              ) : (
                <p className="text-red-500 font-semibold text-lg mt-6">
                  Sorry, the joining date has passed.
                </p>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
