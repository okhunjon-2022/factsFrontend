import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../redux/features/blogs/BlogsApi";
import SingleBlogCard from "./SingleBlogCard";
import CommentCard from "./CommentCard";
import ReletedBlog from "./ReletedBlog";

const SingleBlog = () => {
  const { id } = useParams();

  const { data: blog, isLoading, error } = useFetchBlogByIdQuery(id);

  return (
    <div className="text-primary container mx-auto mt-8">
      <div className="">{isLoading && <div>Laoding...</div>}</div>
      {error && <div>Something went wrong... </div>}
      {blog?.post && (
        <div className="flex flex-col lg:flex-row justify-between items-start md:gap-12 gap-8">
          <div className="lg:w-2/3 w-full">
            <SingleBlogCard blog={blog?.post} />
            <CommentCard comments={blog?.comments} />
          </div>
          <div className="bg-white lg:w-1/3 w-full">
            <ReletedBlog />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
