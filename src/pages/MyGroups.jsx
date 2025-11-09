import React, { useState, useMemo, useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { Search, FolderPlus, Trash2, Pencil, Filter } from "lucide-react";

const categories = [
  "Photography", "Fitness", "Cooking", "Gaming",
  "Music", "Art", "Reading", "Travel",
  "Dance", "Technology", "Crafts", "Outdoors",
  "Movies", "Sports", "DIY", "Others"
];

const MyGroups = () => {
    const [myGroups, setMyGroups] = useState([]);
//const myGroups = useLoaderData();
const navigate = useNavigate();
const { email } = useParams();
useEffect(() => {
    fetch(`https://hobby-hub-server.onrender.com/api/groups/my-groups/${email}`)
      .then((res) => res.json())
      .then((data) => setMyGroups(data))
      .catch((error) => console.error('Error fetching my groups:', error));
  }, [email]);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredGroups = useMemo(() => {
    return myGroups?.filter((group) => {
      const matchesText = group.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || group.hobbyCategory === selectedCategory;

      return matchesText && matchesCategory;
    });
  }, [searchText, selectedCategory, myGroups]);

  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  const paginatedGroups = filteredGroups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteGroup = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#888",
      confirmButtonText: "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-hub-server.onrender.com/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Group removed successfully.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen p-8 md:p-14 bg-linear-to-br from-purple-900 via-pink-900 to-blue-900">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        My Groups
      </h2>

      {/* Search + Category Filter */}
      <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row gap-4 justify-center">
        {/* Search */}
        <div className="flex items-center w-full md:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3">
          <Search className="w-5 h-5 text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search your groups..."
            className="bg-transparent flex-1 text-white placeholder-gray-300 focus:outline-none"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Category Dropdown */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3">
            <Filter className="w-5 h-5 text-gray-300 mr-2" />
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-white flex-1 focus:outline-none"
            >
              <option className="text-black">All</option>
              {categories.map((cat) => (
                <option key={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {myGroups.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            You haven’t created any groups yet!
          </h1>
          <Link
            to="/creategroup"
            className="px-8 py-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Create a Group
          </Link>
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6 overflow-x-auto max-w-6xl mx-auto">
          {/* Table */}
          <table className="table text-white">
            <thead className="text-pink-300 text-sm uppercase">
              <tr>
                <th>Name</th>
                <th className="hidden md:table-cell">Description</th>
                <th className="hidden md:table-cell">Last Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedGroups.map((group) => (
                <tr key={group._id} className="hover:bg-white/5 transition">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={group.photoURL} alt="group" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{group.name}</div>
                        <div className="text-sm opacity-60">
                          {group.hobbyCategory}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="hidden md:table-cell">
                    <span className="badge badge-ghost badge-sm text-white">
                      {group.description.slice(0, 40)}...
                    </span>
                  </td>

                  <td className="hidden md:table-cell">{group.date}</td>

                  <td className="flex flex-col gap-2 mt-3">
                    <button
                      onClick={() => navigate(`/updategroup/${group._id}`)}
                      className="px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                    >
                      <Pencil className="w-4 h-4" /> Update
                    </button>
                    <button
                      onClick={() => handleDeleteGroup(group._id)}
                      className="px-4 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded-xl font-semibold shadow-md transition-all ${
                currentPage === 1
                  ? "bg-gray-300/20 text-gray-500 cursor-not-allowed"
                  : "bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-pink-500/40"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-xl font-semibold shadow-md transition-all ${
                  currentPage === page
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/20 border border-white/30 text-gray-100 hover:bg-white/30"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded-xl font-semibold shadow-md transition-all ${
                currentPage === totalPages
                  ? "bg-gray-300/20 text-gray-500 cursor-not-allowed"
                  : "bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-pink-500/40"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
