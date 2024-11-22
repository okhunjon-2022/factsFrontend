import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchRelatedBlogsQuery } from "../redux/features/blogs/BlogsApi";

function ReletedBlog() {
  const { id } = useParams();
  const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);

  return (
    <div>
      <h3 className="text-2xl font-medium pt-8 px-8 pb-5">Releted Blog</h3>
      <hr />
      {blogs?.innerData?.length > 0 ? (
        <div className="space-y-4 mt-5">
          {blogs?.innerData?.map((blog) => (
            <Link
              key={blog._id}
              to={`/blogs/${blog?._id}`}
              className="flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4"
            >
              <div>
                <h4 className="font-medium text-[#1E73BE]">
                  {blog?.title.substring(0, 50)}
                </h4>
                <p>{blog?.desc}...</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8">No related blogs found!</div>
      )}
    </div>
  );
}

export default ReletedBlog;
