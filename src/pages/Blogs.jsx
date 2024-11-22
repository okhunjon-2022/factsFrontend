import React, { useState } from "react";
import SearchBlog from "./SearchBlog";
import { Link } from "react-router-dom";
import { useFetchBlogsQuery } from "../redux/features/blogs/BlogsApi";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  //get data using redux
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
  // console.log(blogs.innerData);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => setQuery({ search, category });

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="mt-16 container mx-auto">
          <SearchBlog
            search={search}
            handleSearchChange={handleSearchChange}
            handleSearch={handleSearch}
          />

          {error && <div>{error.toString()}</div>}

          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {blogs?.innerData?.map((item) => (
              <Link
                className="shadow-md"
                key={item._id}
                to={`/blogs/${item._id}`}
              >
                <img
                  src={item.coverImg}
                  alt="item.coverImg"
                  className="h-80 w-full"
                />
                <h2 className="text-l p-4">{item.title} </h2>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
