import React from "react";
import commentIcons from "../assets/commentorIcon.png";
import formatDate from "../utils/formatDate";
import PostComment from "./PostComment";

const CommentCard = ({ comments }) => {
  return (
    <div className="my-6 bg-white p-8">
      <div className="">
        {comments?.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium">All comments</h3>
            <div className="">
              {comments.map((comment, index) => (
                <div className="mt-4" key={index}>
                  <div className="flex gap-4 items-center">
                    <img src={commentIcons} alt="" className="h-14" />
                    <div className="text-lg font-medium underline capitalize underline-offset-1 text-blue-400">
                      <p>{comment?.user?.email}</p>
                      <p className="text-[12px ] italic">
                        {formatDate(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                  {/* comment details */}
                  <div className="text-gray-600 mt-5 border p-8">
                    <p className="md:w-4/5">{comment?.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-lg font-medium">No comments found!</div>
        )}
      </div>

      {/* comment input here */}
      <PostComment />
    </div>
  );
};

export default CommentCard;
