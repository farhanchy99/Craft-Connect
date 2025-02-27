import React, { useContext } from "react";
import {
  FaThumbtack,
  FaPager,
  FaRegSave,
  FaCommentAlt,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../Context/UserContext";

const PostUserInfo = ({ post, handleDeletePost }) => {
  const { user } = useContext(Authcontext);
  const { _id } = post;
  return (
    <>
      <div className="flex gap-2">
        <img className="w-10 h-10 rounded-full" src={post?.userPhoto} alt="" />
        <div>
          <Link className="hover:underline" to="/feature/profile">
            {post?.userName}
          </Link>
        
          <div className="flex items-center">
            <p className=" text-xs text-gray-100">
              {post?.currentDate}
            </p>  
          </div>
        </div>
        {/* <div className="ml-auto">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex={0}
              className="btn  btn-sm bg-gray-100 dark:bg-[#2A2A2A] text-black dark:text-white hover:text-white"
            >
              ...
            </label>
            <div
              tabIndex={0}
              className="dropdown-content  menu px-3 dark:bg-[black]  shadow bg-gray-100 rounded-box w-52 py-5"
            >
              <div className="flex items-center pl-3 p-2 dark:hover:bg-[#343434] rounded hover:text-white hover:bg-[#343434] cursor-pointer">
                <FaThumbtack className="mr-3"></FaThumbtack>
                Unpin
              </div>
              <div className="flex items-center pl-3 p-2 dark:hover:bg-[#343434] hover:text-white rounded hover:bg-[#343434] cursor-pointer">
                <FaRegSave className="mr-3"></FaRegSave>
                Unsave
              </div>
              <button className="flex items-center pl-3 p-2 dark:hover:bg-[#343434] hover:text-white rounded hover:bg-[#343434] cursor-pointer">
                <FaEdit className="mr-3"></FaEdit>
                Edit post
              </button>
              <div className="flex items-center pl-3 p-2 dark:hover:bg-[#343434] hover:text-white rounded hover:bg-[#343434] cursor-pointer">
                <FaCommentAlt className="mr-3"></FaCommentAlt>
                Who can comment On your post
              </div>
            </div>
          </div>
          {user?.email === post?.userEmail && (
            <button
              onClick={() => handleDeletePost(_id)}
              className="btn btn-sm ml-2"
            >
              x
            </button>
          )}
        </div> */}
      </div>
    </>
  );
};

export default PostUserInfo;
