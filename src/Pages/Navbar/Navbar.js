import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbLayoutDashboard, TbMessageCircle } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion"
import { FaExclamation, FaMoon, FaUserTie } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FcNext, FcQuestions, FcExport } from "react-icons/fc";
import { Authcontext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import NavSearchField from "./NavSearchField";
import { useQuery } from "@tanstack/react-query";
import UseAdmin from "../AdminPanel/UseAdmin";

const Navbar = () => {
  const { user, logout, myPro } = useContext(Authcontext);
  const [isAdmin] = UseAdmin(user?.email);
  const [messageModal, setMessageModal] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const agree = window.confirm("Are you sure Logout ?");
    if (agree) {
      logout()
        .then((res) => {
          toast.success("Logt out");
          navigate("/login");
        })
        .catch((error) => console.log(error));
    }
  };

  // Dark and light theme by Mamun
  // const [theme, setTheme] = useState("light");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : ""
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { data: allusers = [] } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("https://craft-connect-server-blond.vercel.app/allusers");
      const data = await res.json();
      return data;
    },
  });

  const url = `https://craft-connect-server-blond.vercel.app/users?email=${user?.email}`;
  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  // console.log(users);

  return (
    <div className="dark:bg-[#2A2A2A] fixed w-full top-0 z-[999] lg:z-[1000]  h-[72px] ">
      <div className="flex justify-between items-center backdrop-blur-lg bg-gradient-to-r dark:from-[#3F3F3F] from-white to-[#2C2048] dark:to-[#3F3F3F] border-b dark:border-[#595959] shadow-lg">
        <div className="pl-3">
          <Link
            to="/"
            class="text-2xl text-gray-900 font-semibold flex items-center"
            href="/"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <img src={logo} className="w-32 md:w-14 d-block m-auto hidden lg:block" alt="" />
            </motion.div>
            <motion.div animate={{ x: 10 }} transition={{ ease: "easeOut", duration: 0.85 }}>
            <p class="text-lg hidden lg:block text-[#FF3F4A] dark:text-white ml-1.5 lg:-ml-2.5">
              Craft Connect
            </p>
            </motion.div>
          </Link>
        </div>
        <div className="pl-[65px] lg:pl-0">
          <div className="grid grid-cols-2">
            <div className="">
              <NavSearchField allusers={allusers}></NavSearchField>
            </div>

            <div className="pr-3 flex gap-2 items-center justify-end pl-10 lg:pl-20 ">
              <button onClick={handleThemeSwitch} className="text-[20px] lg:text-[25px]">
                {theme === "light" ? (
                  <IoMdSunny className="text-white"></IoMdSunny>
                ) : (
                  <FaMoon className="text-white"></FaMoon>
                )}
              </button>

              <button
                onClick={() => setMessageModal(!messageModal)}
                className="md:btn md:btn-ghost md:btn-circle p-1 md:p-0 rounded-full bg-zinc-700 hover:bg-zinc-600"
              >
                <Link to="/chats">
                  <TbMessageCircle className="text-xl md:text-4xl text-white"></TbMessageCircle>
                </Link>
              </button>

              
            <div
              className=" flex items-center mx-auto"
              onClick={() => setProfile(!profile)}
            >
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={myPro[0]?.photoURL}
                alt=""
              />
            </div>
            </div>
          </div>
        </div>

        {/*#########################################Profile Modal Start####################################################*/}
        {profile && (
          <div className="w-[80%] md:w-[30%] shadow-2xl rounded-md absolute top-14 right-6 z-[999] dark:bg-[#2A2A2A] bg-gray-100 mt-5 ">
            <div className="px-3 py-3">
              <div className="flex justify-between items-center mb-2 ">
                <Link
                  to="/feature/profile"
                  className="flex items-center cursor-pointer dark:text-white text-black w-full p-2 rounded-md "
                >
                  <img
                    className="w-10 h-10 object-cover rounded-full mr-3"
                    src={`${
                      myPro[0]?.photoURL
                        ? myPro[0]?.photoURL
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                    }`}
                    alt=""
                  />
                  <h3 className="text-xl font-bold text-[#FF3F4A]">
                    {user?.displayName}
                  </h3>
                </Link>
                <div
                  className="btn btn-sm text-white hover:bg-[#99030a] bg-[#FF3F4A]"
                  onClick={() => setProfile(false)}
                >
                  ✕
                </div>
              </div>
              <div className=" border-t border-[#FF3F4A]"></div>
              <div className="py-4">
                <Link
                  to="/dashboard"
                  className="flex justify-between items-center py-2 dark:text-white text-black rounded-md cursor-pointer"
                >
                  <div className="flex items-center">
                    <TbLayoutDashboard className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2 text-yellow-500" />
                    <Link to="/dashboard/add-product" className="font-bold">
                      Users Dashboard
                    </Link>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin/all-users"
                    className="flex justify-between items-center py-2 dark:text-white text-black rounded-md cursor-pointer"
                  >
                    <div className="flex items-center">
                      <FaUserTie className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2 text-yellow-500" />
                      <p className="font-bold">Admin Panel</p>
                    </div>
                    <div>
                      <FcNext className="text-2xl mr-2" />
                    </div>
                  </Link>
                )}
                
                <div
                  onClick={handleLogout}
                  className="flex justify-between items-center py-2 dark:text-white text-black rounded-md cursor-pointer"
                >
                  <div className="flex items-center">
                    <FcExport className="text-4xl text-white bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
                    <p className="font-bold">Logout</p>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*#########################################Profile Modal End####################################################*/}
      </div>
    </div>
  );
};

export default Navbar;
