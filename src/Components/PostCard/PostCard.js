import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLike, BiShareAlt, BiHeart } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";
import PostDetails from "../../Pages/PostDetails/PostDetails";
import PostDetailsModal from "./PostDetailsModal";
import ShareModal from './ShareModal'
import {
  FacebookShareButton,
  FacebookIcon
} from "react-share";
const PostCard = ({
  refetch,
  post,
  handelReaction,
  handleDeletePost,
  user,
  sharedPostsRefetch
}) => {
  const [postReactions, setReactions] = useState([]);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [postId, setPostId] = useState('');
  const [editPost, setEditPost] = useState(false);
  const [love, setLove] = useState(false);
  const [liked, setLiked] = useState(false);
  const { myPro } = useContext(Authcontext);

  const likeLength = post?.likes;
  const handleLike = (id) => {
    const postId = post?._id;
    const likedUser = id;
    const likedInfo = { likedUser, postId };
    fetch("https://craft-connect-server-blond.vercel.app/like", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likedInfo),
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          setLiked(true);
          refetch();
        }
      });
  };

  const reportedPost = () => {
    const reportPost = {
      postAuthor: post?.userName,
      postId: post?._id,
      postAuthorEmail: post?.userEmail,
      postAuthorImg: post?.userPhoto,
      postImg: post?.img,
      postText: post?.postText,
      reporterName: user?.displayName,
      reporterEmail: user?.email,
      reporterImage: user?.photoURL,
    };

    fetch("https://craft-connect-server-blond.vercel.app/report-post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Post Reported");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handelAddBookmarked = () => {
    const bookMarkedPost = {
      bookmarkedUserEmail: user?.email,
      bookmarkedUserName: user?.displayName,
      postId: post?._id,
      postUserEmail: post?.userEmail,
      postUserName: post?.userName,
      postUserPhoto: post?.userPhoto,
      PostPhoto: post?.img,
      postTime: post?.currentDate,
      postText: post?.postText,
    };
    fetch("https://craft-connect-server-blond.vercel.app/user/bookmark", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookMarkedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Bookmarked Successfully Done!");
      });
  };

  const handelShare = () => {
    let currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, "0");
    const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
    const yyyy = currentDate.getFullYear();
    currentDate = mm + "/" + dd + "/" + yyyy;
    const sharedPost = {
      sharedUserEmail: user?.email,
      sharedUserName: user?.displayName,
      sharedUserPhoto: user?.photoURL,
      sharedUserDate: currentDate,
      postId: post?._id,
      postUserEmail: post?.userEmail,
      postUserName: post?.userName,
      postUserPhoto: post?.userPhoto,
      PostPhoto: post?.img,
      postTime: post?.currentDate,
      postText: post?.postText,
    }; 
    fetch("https://craft-connect-server-blond.vercel.app/sharedPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sharedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Shared Successfully Done!");
        sharedPostsRefetch()
      });
  }

  return (
    <div>
      {/* Latest Design Post card  */}
      <div>
        <div className="my-3">
          <div className="w-full border border-[#FF3F4A]/50 p-4 rounded-md shadow-md bg-white dark:bg-[#3F3F3F]">
            <div className="flex justify-between items-center text-black dark:text-white">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[50px] h-[50px] object-cover rounded-full"
                  src={post?.userPhoto}
                  alt=""
                />
                <div>
                  <Link to={`/user/${post.userEmail}`}>
                    <p className="text-[16px]">{post?.userName}</p>
                  </Link>
                  <p className="text-[14px] text-zinc-400">{post?.currentDate}</p>
                </div>
              </div>
              <div>
                <div className="dropdown dropdown-bottom dropdown-end ">
                  <label tabIndex={0} className="text-xl cursor-pointer text-[#FF3F4A]">
                    <BsThreeDots></BsThreeDots>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow-xl rounded-box w-52 bg-[#FF3F4A] dark:bg-[#2a2a2a] text-white"
                  >
                    <li>
                      <Link
                        onClick={handelAddBookmarked}
                        className="hover:bg-[#cc323b]"
                        href="/"
                      >
                        Bookmark
                      </Link>
                    </li>
                    <li>
                      <p
                        onClick={reportedPost}
                        className="hover:bg-[#cc323b]"
                      >
                        Report Post
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => { setOpens(true); setPostId(post?._id) }}
                        className="hover:bg-[#cc323b]"
                      >
                        Share Post
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pb-4" onClick={() => { setOpen(true); setPostId(post?._id) }}>
              <p className="py-2 text-black dark:text-white text-[14px]">
                {post?.postText?.length > 100 ? (
                  <>
                    {post?.postText.slice(0, 100)}{" "}
                    <Link className="font-bold" to="/">
                      ...See More
                    </Link>
                  </>
                ) : (
                  post?.postText
                )}
              </p>
              <div>
                <Link>
                  <img
                    className="w-full rounded-md mt-[5px]"
                    src={post?.img}
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div className="border-t border-zinc-400/50">
              <div className="flex justify-between items-center pt-2 mx-3 text-black dark:text-white">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-1">
                    {/* onClick={() => likedUser(user?.uid)} */}
                    <button
                      onClick={() => handleLike(myPro[0]?._id)}
                      disabled={liked === true}
                      className={
                        liked === true
                          ? "text-[20px] text-[#FF3F4A]"
                          : "text-[20px]"
                      }
                    >
                      <BiHeart />
                    </button>

                    <p className="text-[16px]">{likeLength.length} Likes</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link to={`/postDetails/${post?._id}`}>
                      <button className="text-[20px] mt-3">
                        <TfiCommentAlt />
                      </button>
                    </Link>
                    {/* <p>07</p> */}
                  </div>
                </div>
                <div>
                  {/* Share button and Dropdown  */}
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="text-4xl cursor-pointer ">
                      <BiShareAlt></BiShareAlt>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-[#32205a]"
                    >
                      {/* <li>
                        <a
                          className="hover:bg-[#FF3F4A] hover:text-white"
                          href="/"
                        >
                          Share Now (Public)
                        </a>
                      </li> */}
                      <li>
                        <Link
                          onClick={handelShare}
                          className="hover:bg-[#FF3F4A] hover:text-white"
                          href="/"
                        >
                          Share To Your Feed
                        </Link>
                      </li>
                      {/* <ShareSocial
                        title={'sharing happiness'}
                        url="url_to_share.com"
                        socialTypes={['facebook', 'twitter']}
                      /> */}
                      {/* <li>
                        <a
                          className="hover:bg-[#FF3F4A] hover:text-white"
                          href="/"
                        >
                          Share To Your Story
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostDetailsModal open={open} setOpen={setOpen} postId={postId} />
      <ShareModal opens={opens} setOpens={setOpens} postId={postId} />

    </div>

  );
};

export default PostCard;
