import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const AdCenter = () => {
  const { data: addvertise = [], refetch } = useQuery({
    queryKey: ["addvertise"],
    queryFn: async () => {
      const res = await fetch(
        "https://craft-connect-server-blond.vercel.app/advertising-post/"
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <>
      <section className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
          <div className=" dark:text-white pt-10 pb-4">
          <motion.div animate={{ x: 10 }} transition={{ ease: "easeOut", duration: 0.85 }}>
            <h2 className="text-3xl font-bold dark:text-white text-black border-l-4 border-[#FF3F4A] pl-2">Latest Ads</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-gray-400 dark:text-[#B8B8B8]">Find latest product from Ads</p>
          </motion.div>
          </div>

          <div className="grid max-w-md grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-4 gap-x-[20px] gap-y-12 overflow-y-auto h-screen home pt-5 pb-10 sm:pb-16 lg:pb-52 ">
            {addvertise.map((advertise) => {
              return <>
                <div className="dark:bg-[#3f3f3f] bg-[#FF3F4A] h-[31rem] px-3 py-3 rounded-md relative hover:-translate-y-[5px] transition duration-300">
                  <Link to={advertise._id} className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-[300px] rounded-md" src={advertise.advertiseBg} alt="" />
                  </Link>
                  <div className="flex py-4 items-center gap-3 ">
                    <img src={advertise.userPhoto} className='w-[30px] h-[30px] rounded-full ' alt="" />
                    <div className="flex flex-col">
                      <span className="font-semibold tracking-widest uppercase rounded-full text-gray-300"> {advertise.userName} </span>
                      <span className="text-xs font-base text-gray-300"> {advertise.userEmail} </span>
                    </div>
                  </div>
                  <Link to={advertise._id} title={advertise.advertiseContent} className="text-gray-100 text-[14px] text-sm block h-[30px] pb-10"> {advertise.advertiseContent.slice(0, 80)} ...Read More</Link>
                  <Link to={advertise._id} className="px-4 relative w-full block bottom-0 left-0 py-3 text-xs text-center font-semibold tracking-widest uppercase rounded-lg text-white bg-[#FF3F4A] my-3">Read More </Link>
                </div>
              </>
            })}

          </div>
        </div>
      </section>

    </>
  );
};

export default AdCenter;
