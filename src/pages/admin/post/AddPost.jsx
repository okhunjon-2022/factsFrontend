import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePostBlogMutation } from "../../../redux/features/blogs/BlogsApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const { user } = useSelector((state) => state.auth);

  const [postBlog, { isLoading }] = usePostBlogMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title,
        coverImg,
        desc: metaDesc,
        author: user?._id,
        category,
        rating,
      };
      const response = await postBlog(newPost).unwrap();
      console.log(response);
      toast.success("Blog is posted successfully!");
      navigate("/dashboard/manage-items");
    } catch (error) {
      console.error("Failed to submit post", error);
      setMessage("Failed to post the blog. Please try again.");
    }
  };

  return (
    <div className="bg-white md:p-8 p-2">
      <h2 className="text-2xl font-semibold">Create A New Blog Post</h2>
      <form className="space-y-5 pt-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="font-semibold text-xl">Blog Title</label>
          <input
            type="text"
            className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
            placeholder="Ex: Marina del Rey Marriot..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Blog Details */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full border p-5 space-y-5">
            {/* Cover Image */}
            <div className="space-y-4">
              <label className="font-semibold">Blog Cover:</label>
              <input
                type="text"
                className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="https://unsplash.com/image..."
                value={coverImg}
                onChange={(e) => setCoverImg(e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-4">
              <label className="font-semibold">Category:</label>
              <select
                required
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
              >
                <option value="" disabled defaultValue="Select a Category">
                  Select a Category
                </option>
                <option value="weather">Weather</option>
                <option value="car">Car</option>
                <option value="fact">Fact</option>
                <option value="dream">Dream</option>
                <option value="war">War</option>
              </select>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <label className="font-semibold">Description:</label>
              <textarea
                cols={4}
                rows={4}
                className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="Write your blog description"
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                required
              />
            </div>

            {/* Rating */}
            <div className="space-y-4">
              <label className="font-semibold">Rating:</label>
              <input
                type="number"
                className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
              />
            </div>

            {/* Author */}
            <div className="space-y-4">
              <label className="font-semibold">Author:</label>
              <input
                type="text"
                className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
                value={user?.username}
                placeholder="Author Name (not editable)"
                disabled
              />
            </div>
          </div>
        </div>

        {message && <p className="text-red-500">{message}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
        >
          {isLoading ? "Posting..." : "Add New Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
