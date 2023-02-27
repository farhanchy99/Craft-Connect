import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../../../Context/UserContext";
import Loading from "../../../../Loading/Loading";

const FriendSuggestionCard = ({ followingUser, isLoading }) => {
  const { user, myProUpdate } = useContext(Authcontext);
  const [follow, setFollow] = useState(false);

  const handleFollow = (id ) => {
    const followerUsers = user?.email;
    const followingUsers = id;
    const container = { followerUsers, followingUsers };

    fetch("https://craft-connect-server-blond.vercel.app/follow", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(container),
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          setFollow(true);
          myProUpdate();
        }
      });
  };
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-[90%]">
    <div className="lg:mt-5">
      {/* <div className="">
        <div className="flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
          <img
            src={followingUser?.photoURL}
            alt=""
            className="avatar rounded-full h-14 w-14"
          />
          <div className="text-black dark:text-white">
            <h2 className="font-bold text-base">
              {followingUser?.displayName}
            </h2>
            {/* <small>100 mutual friend</small> */}
            {/* <div className="flex gap-2">
              {follow ? (
                <button className="w-[100px] h-[36px] bg-[#FF3F4A] rounded text-white">
                  Following
                </button>
              ) : (
                <button
                  onClick={() => handleFollow(followingUser?.email)}
                  className="w-[100px] h-[36px] bg-[#FF3F4A] rounded text-white"
                >
                  Follow
                </button>
              )}

              <button className="w-[100px] h-[36px] bg-gray-600 rounded text-white">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div> */}
<div className="card w-[15rem] h-[23rem] shadow-2xl rounded bg-white dark:bg-[#3f3f3f] border border-zinc-300 dark:border-zinc-600">
    <figure><img src={followingUser?.photoURL} className="w-[275px] h-[260px] object-cover" alt="none" /></figure>
    <div className="px-4 py-4">
      <h2 className="text text-black dark:text-white">
        {followingUser?.displayName}
      </h2>
      <div className="mt-5">
        {follow ? (
          <button className="py-2 w-full bg-[#FF3F4A] hover:bg-[#cc323b] rounded text-white border-0">
            Following
          </button>
        ) : (
          <button
            onClick={() => handleFollow(followingUser?.email)}
            className="py-2 w-full bg-[#FF3F4A] hover:bg-[#cc323b] rounded text-white border-0"
          >
            Follow
          </button>
        )}

        <button className="py-2 w-full bg-gray-600 hover:bg-gray-700 rounded text-white mt-2 border-0">
          Remove
        </button>
      </div>
    </div>
  </div>



    </div>

    
  </div>
  );
};

export default FriendSuggestionCard;
