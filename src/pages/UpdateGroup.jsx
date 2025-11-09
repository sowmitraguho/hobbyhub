import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthContext";
import { useLoaderData } from "react-router";
import { Sparkles, PlusCircle } from "lucide-react";

const categoryList = [
  "Arts & Crafts", "Photography", "Fishing", "Cooking",
  "Music", "Sports & Fitness", "Technology & Coding",
  "Books & Literature", "Writing", "Gaming",
  "Outdoor Activities", "Travel", "DIY",
  "Movies & Entertainment", "Dance", "Others"
];

const UpdateGroup = () => {
  const { loggedInUser } = use(AuthContext);
  const { displayName, email } = loggedInUser;
  const currentGroupData = useLoaderData();

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedInfo = Object.fromEntries(formData.entries());

    fetch(`https://hobby-hub-server.onrender.com/api/groups/${currentGroupData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Group Updated!",
            text: "Your group has been updated successfully.",
            icon: "success",
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">Update Your Hobby Group</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            Edit Your Group Details
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Keep your hobby group information current. Update the details below so members stay informed and engaged.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdateGroup}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl space-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Group Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Group Name</label>
              <input
                type="text"
                name="name"
                defaultValue={currentGroupData.name}
                required
                className="input rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 w-full"
              />
            </div>

            {/* Hobby Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Hobby Category</label>
              <select
                name="hobbyCategory"
                defaultValue={currentGroupData.hobbyCategory}
                required
                className="input rounded-xl bg-white/20 border border-white/30 text-white w-full"
              >
                <option className="text-black" value="">
                  -- Select a Category --
                </option>
                {categoryList.map((c) => (
                  <option key={c} className="text-black">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* New Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">New Category (Optional)</label>
              <input
                type="text"
                name="newCategory"
                defaultValue={currentGroupData.newCategory}
                className="input rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 w-full"
                placeholder="If choosing 'Others'"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <input
                type="text"
                name="description"
                defaultValue={currentGroupData.description}
                className="input rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 w-full"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Meeting Location</label>
              <input
                type="text"
                name="locatiopn"
                defaultValue={currentGroupData.locatiopn}
                className="input rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 w-full"
              />
            </div>

            {/* Maximum Members */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Maximum Members</label>
              <input
                type="number"
                name="maxMember"
                defaultValue={currentGroupData.maxMember}
                className="input rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 w-full"
              />
            </div>

            {/* Start Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Join Before</label>
              <input
                type="date"
                name="date"
                defaultValue={currentGroupData.date}
                className="input rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 w-full"
              />
            </div>

            {/* Photo URL */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                defaultValue={currentGroupData.photoURL}
                className="input rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 w-full"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">User Name</label>
              <input
                type="text"
                name="userName"
                readOnly
                defaultValue={displayName}
                className="input rounded-xl bg-white/20 border border-white/30 text-gray-200 w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">User Email</label>
              <input
                type="email"
                name="userEmail"
                readOnly
                defaultValue={email}
                className="input rounded-xl bg-white/20 border border-white/30 text-gray-200 w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-pink-500/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <PlusCircle className="w-5 h-5" />
              Update Group
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroup;