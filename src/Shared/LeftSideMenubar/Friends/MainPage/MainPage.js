import React, { useEffect, useState } from "react";
import FriendSuggestionCard from "../FriendSuggestion/FriendSuggestionCard/FriendSuggestionCard";
import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query";

const MainPage = () => {

  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://craft-connect-server-blond.vercel.app/allusers");
      const data = await res.json();
      return data;
    },
  });
  refetch();
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <section className="pb-20 w-[90%] m-auto">

      <div>
        <div className="flex items-center justify-between mt-10">
          <div>
          <motion.div animate={{ x: 10 }} transition={{ ease: "easeOut", duration: 0.85 }}>
            <h1 className="text-3xl font-bold dark:text-white text-black border-l-4 border-[#FF3F4A] pl-2">Friends</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-gray-400 dark:text-[#B8B8B8]">
              People You May Know
            </h2>
          </motion.div>
          </div>
          {/* <button className="text-[#FF3F4A] hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
            See All
          </button> */}
        </div>
        <div className="grid grid-cols-5 py-2 mx-auto px-4 gap-5 mt-5 overflow-y-auto h-screen home pb-52">
            {allUser?.map((followingUser) => (
              <FriendSuggestionCard
                followingUser={followingUser}
                key={followingUser?._id}
              ></FriendSuggestionCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
