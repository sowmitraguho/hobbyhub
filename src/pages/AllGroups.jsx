import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import { Search } from "lucide-react";
import GroupCard from "../Components/GroupCard";

// Popular Categories (Expanded)
const popularCategories = [
    "Photography",
    "Fitness",
    "Cooking",
    "Gaming",
    "Music",
    "Art",
    "Reading",
    "Travel",
    "Dancing",
    "Crafting",
    "Hiking",
    "Technology",
    "Meditation",
    "Sports",
    "Writing",
    "Gardening",
    "Coding",
];

const AllGroups = () => {
    const allGroups = useLoaderData();

    // STATES
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);



    // FILTERED GROUPS
    const filteredGroups = useMemo(() => {
        return allGroups.filter((group) => {
            const matchesSearch =
                group.name.toLowerCase().includes(searchText.toLowerCase()) ||
                group.description.toLowerCase().includes(searchText.toLowerCase());

            const matchesCategory =
                selectedCategory === "All" ||
                group.hobbyCategory === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchText, selectedCategory, allGroups]);

    const itemsPerPage = 6; // or 9

    const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);

    const paginatedGroups = filteredGroups.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="min-h-screen p-6 lg:p-12 bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">

            {/* Blurred Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300/20 dark:bg-purple-500/10 blur-3xl rounded-full -z-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300/20 dark:bg-pink-500/10 blur-3xl rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-center bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    All Hobby Groups
                </h2>

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search groups..."
                            className="w-full px-5 py-3 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/30 dark:border-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none shadow-md"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Search className="absolute right-4 top-3.5 text-gray-500 dark:text-gray-300" />
                    </div>

                    <button
                        onClick={() => setSearchText("")}
                        className="px-6 py-3 text-white font-semibold rounded-xl bg-linear-to-r from-purple-600 to-pink-600 shadow-lg hover:shadow-pink-500/50 transition-all"
                    >
                        Clear Search
                    </button>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all ${selectedCategory === "All"
                            ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                            : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-200 border border-white/30 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-700"
                            }`}
                    >
                        All
                    </button>

                    {popularCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all ${selectedCategory === category
                                ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                                : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-200 border border-white/30 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Groups Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGroups.length > 0 ? (
                        paginatedGroups.map((group) => (
                            <GroupCard key={group._id} group={group} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600 dark:text-gray-300 text-lg mt-6">
                            No groups found matching your search or filters.
                        </p>
                    )}
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-10 gap-3">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className={`px-4 py-2 rounded-xl font-semibold shadow-md transition-all ${currentPage === 1
                                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-pink-500/40"
                            }`}
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-xl font-semibold shadow-md transition-all ${currentPage === page
                                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                                    : "bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-gray-700"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className={`px-4 py-2 rounded-xl font-semibold shadow-md transition-all ${currentPage === totalPages
                                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-pink-500/40"
                            }`}
                    >
                        Next
                    </button>
                </div>


            </div>
        </div>
    );
};

export default AllGroups;
