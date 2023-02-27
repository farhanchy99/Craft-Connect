import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";
import Loading from "../../Shared/Loading/Loading";
import BookMarkedCard from "./BookMarkedCard";
import { motion } from "framer-motion"

const BookMarked = () => {

  const { user } = useContext(Authcontext)

  const { data: posts = [], refetch, isLoading } = useQuery({
    queryKey: [user?.email],
    // queryKey: ["posts" ,user?.email],
    queryFn: async () => {
      const res = await fetch(`https://craft-connect-server-blond.vercel.app/user/bookmarkPost/${user?.email}`);
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="h-screen flex flex-col w-11/12 m-auto">
      <div className="pt-10 pb-4">
        <motion.div animate={{ x: 10 }} transition={{ ease: "easeOut", duration: 0.85 }}>
          <h1 className="text-3xl font-bold dark:text-white text-black border-l-4 border-[#FF3F4A] pl-2">BookMarked</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-gray-400 dark:text-[#B8B8B8]">All your bookmarked posts are here!</p>
        </motion.div>
      </div>
      
      {
        posts?.length>0 ?
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-y-auto home pb-32">
          {
            posts.map((post) => <BookMarkedCard
            key={post._id}
            post={post}
            refetch= {refetch}
            ></BookMarkedCard>)
          }
        </div>
        </>:
        <>
          <div className="m-auto">
            <h1 className="text-5xl pb-5 text-gray-400">Please bookmark a post Now</h1>
            <div className="flex justify-center">
              <Link to="/">
                <button className="btn bg-[#FF3F4A]">Book Now</button>
              </Link>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default BookMarked;
