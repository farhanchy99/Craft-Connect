import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import useClickOutside from "../../Components/helpers/clickOutside";
import { useContext } from "react";
import { Authcontext } from "../../Context/UserContext";
import UpdateCoverImg from "./UpdateProfileImage/UpdateCoverImg";
import UpdateProfileImage from "./UpdateProfileImage/UpdateProfileImage";

const ProfileInfo = ({ myProfile }) => {
  const [showCoverMenu, setShowCoverMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setShowCoverMenu(false));

  const { user, myPro } = useContext(Authcontext);
  // console.log(user);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleFollow = () => {
    fetch("https://craft-connect-server-blond.vercel.app/follow", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="relative md:w-full">
      <div className="flex justify-between pt-6 px-4">
        <div className="flex justify-between w-[17%] text-center">
          <div>
            <h1 className="dark:text-zinc-300 text-gray-500">Following</h1>
            <p className="text-gray-700 dark:text-white font-bold text-lg">
            {myPro[0]?.following?.length ? myPro[0]?.following?.length : "0"}

            </p>
          </div>
          <div>
            <h1 className="dark:text-zinc-300 text-gray-500">Followers</h1>
            <p className="text-gray-700 dark:text-white font-bold text-lg">{myPro[0]?.followers?.length}{" "}</p>
          </div>
        </div>
        <button onClick={() => setShowCoverMenu(!showCoverMenu)}>
          <BsThreeDotsVertical className="text-3xl" />
        </button>
      </div>
      {showCoverMenu && (
        <div className="absolute top-0 right-0">
          <div
            className="bg-[#ff3f4a] dark:bg-[#2a2a2a]  p-[10px] w-[50%] md:w-[200px] rounded-[10px] shadow-xl z-[999] absolute top-10 right-6"
            ref={menuRef}
          >
            <div
              onClick={() => setOpenModal(true)}
              className="cursor-pointer p-2 hover:bg-[#cc323b] text-black  hover:text-white duration-300 rounded-md text-center"
            >
              <p className="text-xs text-white">Update Profile Picture</p>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="cursor-pointer p-2 mt-2 hover:bg-[#cc323b] text-black  hover:text-white duration-300 rounded-md text-center"
            >
              <p className="text-xs text-white">Upload Cover photo</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-evenly  items-center  pb-8 w-full  mx-auto text-black dark:text-white">
        {/* <div>
          <Link>Timeline</Link>
        </div>
        <div>
          <Link>
            <button>Follower</button>
          </Link>
        </div>
        <div>
          <Link>Friends</Link>
        </div> */}
        <div className=" mt-[-35px]">
          <Link className="text-[27px] hover:text-orange-600 duration-300">
            {myProfile?.displayName}
          </Link>
          {/* <p className="text-center">Dhaka, Bangladesh</p> */}
        </div>
        {/* <div>
          <Link>Photos</Link>
        </div>
        <div>
          <Link>Videos</Link>
        </div> */}
      </div>

      <UpdateCoverImg
        myProfile={myProfile}
        open={open}
        setOpen={setOpen}
      ></UpdateCoverImg>
      <UpdateProfileImage
        myProfile={myProfile}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></UpdateProfileImage>
    </div>
  );
};

export default ProfileInfo;
