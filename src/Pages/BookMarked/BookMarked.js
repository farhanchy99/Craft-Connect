import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";
import BookMarkedCard from "./BookMarkedCard";

const BookMarked = () => {

  const { user } = useContext(Authcontext)

  const { data: posts = [], refetch } = useQuery({
    queryKey: [user?.email],
    // queryKey: ["posts" ,user?.email],
    queryFn: async () => {
      const res = await fetch(`https://craft-connect-server-blond.vercel.app/user/bookmarkPost/${user?.email}`);
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="h-screen flex flex-col mt-5 md:mt-5 overflow-y-auto w-11/12 m-auto pb-32 home">
      <h1 className="sm:text-xl md:text-2xl pt-5 font-semibold text-black dark:text-white">BookMarked</h1>
      <p>All your bookmarked posts are here!</p>
      
      {
        posts?.length>0 ?
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
