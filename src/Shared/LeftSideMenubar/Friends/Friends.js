import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import FriendRequestCard from "./FriendRequest/FrieendRequestBar/FriendRequestCard";
import LeftSide from "./LeftSide/LeftSide";
import MainPage from "./MainPage/MainPage";

const Friends = () => {
  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://craft-connect-server-blond.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  refetch();
  // console.log(users);
  return (
    <section className="bg-white dark:bg-[#2A2A2A]">
      <div className=" hidden lg:block">
        <div>
          {/* <div className="col-span-3 hidden lg:block dark:bg-[#3F3F3F]">
            <LeftSide></LeftSide>
          </div> */}
          <div>
            <MainPage></MainPage>
          </div>
        </div>
      </div>

      {/* For Mobile device  */}
      {/* <div className="max-w-xl mt-[60px] h-screen">
        <div className="flex justify-between items-center px-4 dark:text-white text-black">
          <h2 className="font-bold text-2xl"> Friends</h2>
          <FaSearch className="text-2xl"></FaSearch>
        </div>

        <div className="flex gap-5 px-4 my-4 dark:text-white text-black font-semibold">
          <Link
            to="/friends/suggestion"
            className="bg-gray-200 dark:bg-[#2A2A2A] px-2 py-1 rounded-full"
          >
            Suggestions
          </Link>
          <Link
            to="/friends/list"
            className="bg-gray-200 dark:bg-[#2A2A2A] px-2 py-1 rounded-full"
          >
            Your Friends
          </Link>
        </div>

        <div className="dark:text-white text-black flex justify-between px-4">
          <h2 className="text-xl font-bold">Friend requests</h2>
          <button className="text-blue-700">See all</button>
        </div>
        <div className="w-full px-2">
          <FriendRequestCard></FriendRequestCard>
          <FriendRequestCard></FriendRequestCard>
          <FriendRequestCard></FriendRequestCard>
          <FriendRequestCard></FriendRequestCard>
        </div>
      </div> */}
    </section>
  );
};

export default Friends;
