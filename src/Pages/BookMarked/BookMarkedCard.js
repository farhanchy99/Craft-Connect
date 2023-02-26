import React from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-hot-toast";
import PostDetailsModal from "../../Components/PostCard/PostDetailsModal";
import { useState } from "react";

const BookMarkedCard = ({ post, refetch }) => {
  const [open, setOpen] = useState(false);
  const [postId, setPostId] = useState('');


  const handelRemoveBookmarked = () => {
    const post_id = post._id;
    // console.log(post_id);
    fetch(`https://craft-connect-server-blond.vercel.app/user/bookmarkedPost/${post_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Bookmarked Successfully Deleted!");
        refetch();
      });
  };

  return (
    <div className="my-5">
      <div className="w-full h-[320px] border border-[#FF3F4A] p-5 rounded-md shadow-md bg-white dark:bg-[#3f3f3f]">
        <div className="flex justify-between items-center text-black dark:text-white">
          <div className="flex gap-3 items-center">
            <img
              className="w-[30px] h-[30px] object-cover rounded-full"
              src={post?.postUserPhoto}
              alt=""
            />
            <div>
              <Link to={`/user/${post.userEmail}`}>
                <p className="text-sm">{post?.postUserName}</p>
              </Link>
              <p className="text-xs text-zinc-400">{post?.postTime}</p>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-bottom dropdown-end ">
              <label tabIndex={0} className="text-lg cursor-pointer ">
                <BsThreeDots></BsThreeDots>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-[#32205a]"
              >
                <li>
                  <Link
                    onClick={handelRemoveBookmarked}
                    className="hover:bg-[#FF3F4A] hover:text-white"
                    href="/"
                  >
                    Remove Bookmark
                  </Link>
                </li>
                {/* <li>
                                            <Link
                                                className="hover:bg-[#FF3F4A] hover:text-white"
                                                href="/"
                                            >
                                                Save
                                            </Link>
                                    </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-1">
          <Link to={`/postDetails/${post._id}`}>
            <p className="py-1 text-xs text-black dark:text-white">
              {post?.postText?.length > 50 ? (
                <>
                  {post?.postText.slice(0, 50)}{" "}
                  <Link className="font-bold" to="/">
                    See More...
                  </Link>
                </>
              ) : (
                post?.postText
              )}
            </p>

            {
              post?.PostPhoto ?
              <>
                {/* <Link to={}> */}
                <img
                  className="w-full h-[200px] rounded-md mt-[5px] object-cover"
                  src={post?.PostPhoto}
                  alt=""
                />
              </>:
              <>
                
              </>
            }
          </Link>
        </div>
      </div>
    <PostDetailsModal open={open} setOpen={setOpen} postId={postId} />
    </div>
  );
};

export default BookMarkedCard;
