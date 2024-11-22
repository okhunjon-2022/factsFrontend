import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useFetchBlogByIdQuery,
  useUpdateBlogMutation,
} from "../../../redux/features/blogs/BlogsApi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [updateBlog] = useUpdateBlogMutation();

  const {
    data: blog = {},
    error,
    isLoading,
    refetch,
  } = useFetchBlogByIdQuery(id);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = {
        title: title || blog.post.title,
        coverImg: coverImg || blog.post.coverImg,
        desc: metaDesc || blog.post.desc,
        category: category || blog.post.category,
        author: user?._id,
        rating: rating || blog.post.rating,
      };
      const response = await updateBlog({ id, ...updatedPost }).unwrap();
      toast("Blog is updated successfully!");
      navigate("/dashboard");
      refetch();
    } catch (error) {
      console.log("Failed to submit post", error);
    }
  };

  return (
    <div className="bg-white md:p-8 p-2">
      <h2 className="text-2xl font-semibold">Edit or Update Post</h2>
      <form className="space-y-5 pt-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="font-semibold text-xl">Blog Title</label>
          <input
            type="text"
            className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
            placeholder="Ex:Marina del Rey Marriot..."
            defaultValue={blog?.post?.title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* blog details */}

        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Right side */}
          <div className=" w-full border p-5 space-y-5">
            <p className="text-xl font-semibold">Choose Blog Format</p>

            {/* images */}
            <div className="space-y-4">
              <label className="font-semibold ">Blog Cover:</label>
              <input
                type="text"
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="https://unsplash.com/image/cover-photo-of-blog1.png..."
                defaultValue={blog?.post?.coverImg}
                onChange={(e) => setCoverImg(e.target.value)}
                required
              />
            </div>

            {/* category */}
            <div className="space-y-4">
              <label className="font-semibold ">Category:</label>
              {/* <input
                type="text"
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="RoofTop/Travel/Nature"
                defaultValue={blog?.post?.category}
                onChange={(e) => setCategory(e.target.value)}
                required
              /> */}
              <select
                required
                onChange={(e) => setCategory(e.target.value)}
                value={blog?.post?.category}
                className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
              >
                <option disabled>Select a Category</option>
                <option value="weather">Weather</option>
                <option value="car">Car</option>
                <option value="fact">Fact</option>
                <option value="dream">Dream</option>
                <option value="war">War</option>
              </select>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <label className="font-semibold ">Description</label>
              <textarea
                type="text"
                cols={4}
                rows={4}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="Write your blog description"
                defaultValue={blog?.post?.desc}
                onChange={(e) => setMetaDesc(e.target.value)}
                required
              />
            </div>

            {/* rating */}
            <div className="space-y-4">
              <label className="font-semibold ">Rating:</label>
              <input
                type="number"
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                defaultValue={blog?.post?.rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>

            {/* author */}
            <div className="space-y-4">
              <label className="font-semibold ">Author:</label>
              <input
                type="text"
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                value={user?.username}
                placeholder={`{user.username (not editable)}`}
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
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
