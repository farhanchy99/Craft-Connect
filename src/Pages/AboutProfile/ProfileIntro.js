import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { FaEdit, FaWifi, FaUserCheck } from "react-icons/fa";
import { Authcontext } from "../../Context/UserContext";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineClockCircle } from "react-icons/ai";

const ProfileIntro = () => {
  const { myPro } = useContext(Authcontext);
  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("https://craft-connect-server-blond.vercel.app/allusers");
      const data = await res.json();
      return data;
    },
  });
  // console.log(myPro)
  return (
    <div className=" pt-5">
      <div className="mx-auto card-body p-2 flex rounded-lg shadow-xl w-full md:w-[300px] text-gray-500 bg-white dark:bg-[#3F3F3F] overflow-scroll home border border-[#FF3F4A]">
        <h1 className="ml-4 mt-4 dark:text-white text-black text-xl">Intro</h1>
        <div>
          <ul className="menu">
            <div className="flex px-5 text-center items-center dark:text-gray-300 text-gray-700">
                <AiOutlineClockCircle/>
                <h1 className="px-4 text-center">Joined 2021</h1>
            </div>
            <div className="divider m-0"></div>
            <div className="hover:bg-[#FF3F4A] hover:text-white dark:text-white text-gray-700 duration-200 rounded-md px-5 py-2">
              <Link to="/editprofile" className="justify-between flex">
                <p>Edit Profile</p> <FaEdit></FaEdit>
              </Link>
            </div>
            <div className="hover:bg-[#FF3F4A] hover:text-white dark:text-white text-gray-700 duration-200 rounded-md px-5 py-2">
              <Link to="/advertisement/create" className="justify-between flex">
                Create Advertisement <HiSpeakerphone></HiSpeakerphone>
              </Link>
            </div>
          </ul>
        </div>
        <div className="divider m-0"></div>
        {myPro[0]?.socialMedia ? (
          <>
            <div className="divider m-0"></div>
            <div className="px-2">
              <p className="font-bold dark:text-white text-gray-700 ml-2 mb-2">
                Social Networks:
              </p>
              <a
                target={"_blank"}
                href={myPro[0]?.socialMedia[0]}
                className="flex items-center justify-center py-2 w-full rounded-md gap-2 bg-[#FF3F4A] mb-2 px-2"
              >
                <BsFacebook className="text-white text-xl" />
                <p className="font-bold text-white">Facebook</p>
              </a>
              <a
                target={"_blank"}
                href={myPro[0]?.socialMedia[1]}
                className="flex items-center justify-center py-2 w-full rounded-md gap-2 bg-[#FF3F4A] mb-2 px-2"
              >
                <BsLinkedin className="text-white  text-xl" />
                <p className="font-bold text-white">Linkedin</p>
              </a>
            </div>
          </>
        ) : (
          <>
            <p className="mt-2 text-center">You Do not Have any social network</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileIntro;
