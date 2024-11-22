import React from "react";
import formatDate from "../utils/formatDate";
import { useGetUserQuery } from "../redux/features/auth/authApi";

const SingleBlogCard = ({ blog }) => {
  const { title, desc, coverImg, category, rating, author, createAt } =
    blog || {};

  const { data: user = [], isLoading } = useGetUserQuery();
  const userFilter = user?.users?.filter((user) => user._id === author);

  return (
    <>
      <div className="bg-white p-8">
        <div className="">
          <h4 className="md:text-1xl text-2xl font-medium mb-4">{title}</h4>
          <p>
            {formatDate(createAt)} by admin{" "}
            {userFilter?.map((item) => (
              <span key={item._id} className="text-blue-400 cursor-pointer">
                {item.email}
              </span>
            ))}
          </p>
        </div>

        <div className="">
          <img
            src={coverImg}
            alt="Cover img"
            className="w-full md:h-[520px] bg-cover"
          />
        </div>
        {/* blog details */}
        <div className="mt-8 space-y-4">
          <div className="space-y-3">{desc}</div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogCard;
