import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GiSpookyHouse } from "react-icons/gi";
// import { IoBarChartOutline } from "react-icons/io5";
import {
  BsNewspaper,
  BsBookmark,
} from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
// import { AiOutlineFlag } from "react-icons/ai";
import { FiHome, FiUsers } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const LeftSideBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: FiHome },
    //{ name: "Most Recent", link: "/", icon: BsNewspaper },
    { name: "Friends", link: "/friends", icon: FiUsers },
    // { name: "Pages", link: "/feature/pages", icon: AiOutlineFlag },
    { name: "Marketplace", link: "/feature/marketplace", icon: GiSpookyHouse },
    { name: "Bookmarked", link: "/feature/bookmarked", icon: BsBookmark },
    { name: "Ad Center", link: "/feature/adcenter", icon: RiAdvertisementLine },
    //{ name: "Ads Manager", link: "/", icon: IoBarChartOutline },
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6 ">
      <div
        className={`pt-[30px] lg:bg-white dark:lg:bg-[#3F3F3F] dark:text-white min-h-screen ${
          open ? "w-72" : "w-[70px]"
        } duration-500 text-black  z-[1000] lg:z-[999] fixed lg:shadow-xl`}
      >
        <div className=" h-0 lg:h-[72px]  p-0 lg:hidden">
          <img
            src={logo}
            onClick={() => setOpen(!open)}
            className="w-14 d-block m-auto py-[10px]"
            alt=""
          />
        </div>
        <div className="py-3 lg:flex px-4 justify-end  hidden">
          {open ? (
            <RxCross1
              size={26}
              className="cursor-pointer mt-2"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <HiMenuAlt3
              size={26}
              className="cursor-pointer mt-2"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div className="mt-8 lg:flex flex-col px-4 gap-4 relative  hidden">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-base  gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "25" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-black dark:text-white duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-[#FF3F4A] font-semibold whitespace-pre text-white rounded drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>

        {/* code for mobile */}

        {open && (
          <div className="dark:bg-[#563f8e] h-screen bg-[#FAFBFD]">
            <div className="py-3 flex px-4 justify-end  lg:hidden">
              {open && (
                <RxCross1
                  size={26}
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
            <div className="mt-2 flex flex-col duration-1000 px-4 gap-4 relative  lg:hidden">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-5"
                  } group flex items-center text-base   gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre text-black dark:text-white duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeftSideBar;