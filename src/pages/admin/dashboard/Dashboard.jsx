import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaBlog, FaUsers } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { useFetchBlogsQuery } from "../../../redux/features/blogs/BlogsApi";
import { useGetCommentsQuery } from "../../../redux/features/comments/commentApi";
import { useGetUserQuery } from "../../../redux/features/auth/authApi";

const Dashboard = () => {
  const [query, setQuery] = useState({ search: "", category: "" });
  const { user } = useSelector((state) => state.auth);
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
  const { data: comments = [] } = useGetCommentsQuery();
  const { data: users = [] } = useGetUserQuery();
  const isAdminCounts = users?.users?.filter(
    (user) => user.role === "admin"
  ).length;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-80 text-lg font-semibold">
          Loading......
        </div>
      ) : (
        <div className="space-y-6">
          {/* Welcome Message */}
          <div className="bg-bgPrimary p-5 rounded-lg shadow">
            <h1>Hi, {user?.username || "Guest"}</h1>
            <p>Welcome to the admin dashboard</p>
            <p>
              Here you can manage your hotel's posts, manage rooms, and other
              administrative tasks.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
            {/* Users Card */}
            <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center shadow">
              <FaUsers size={40} className="text-indigo-600" />
              <p className="text-lg font-medium">2 Users</p>
            </div>
            {/* Blogs Card */}
            <div className="bg-red-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center shadow">
              <FaBlog size={40} className="text-red-600" />
              <p className="text-lg font-medium">
                {blogs?.innerData?.length || 0} Blogs
              </p>
            </div>
            {/* Admins Card */}
            <div className="bg-lime-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center shadow">
              <RiAdminLine size={40} className="text-lime-600" />
              <p className="text-lg font-medium">
                {isAdminCounts || 0} Admin{isAdminCounts !== 1 ? "s" : ""}
              </p>
            </div>
            {/* Comments Card */}
            <div className="bg-orange-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center shadow">
              <FiUsers size={40} className="text-orange-600" />
              <p className="text-lg font-medium">
                {comments?.innerData || 0} Comments
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
