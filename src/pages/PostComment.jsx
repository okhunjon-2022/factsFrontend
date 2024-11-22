import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { usePostCommentMutation } from "../redux/features/comments/commentApi";
import { useFetchBlogByIdQuery } from "../redux/features/blogs/BlogsApi";
import { toast } from "react-toastify";

const PostComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [postComment] = usePostCommentMutation();
  const { refetch } = useFetchBlogByIdQuery(id, { skip: !id });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to comment on this post.");
      navigate("/login");
      return;
    }
    const newComment = {
      comment: comment,
      user: user?._id,
      postId: id,
    };

    try {
      const response = await postComment(newComment).unwrap();
      toast.success("Comment posted successfully");
      setComment("");
      refetch();
    } catch (error) {
      alert("An error occured while posting comment.");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium mb-8">Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="text"
          cols="30"
          rows="10"
          placeholder="Share your opinion about this post..."
          className="w-full bg-bgPrimary focus:outline-none p-5"
        />
        <button className="w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostComment;
