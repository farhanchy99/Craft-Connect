import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import camera from "../../assets/icons/Svg Icons/Camera.svg";
import tagFriends from "../../assets/icons/Svg Icons/TagFriends.svg";
import locations from "../../assets/icons/Svg Icons/Locations.svg";
import ImageUploadModal from "./ImgUploadModal";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import PreviewPost from "./PreviewPost";
import { v4 as uuidv4 } from "uuid";

const PostBox = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState([]);
  const [openPreviewPost, setOpenPreviewPost] = useState(false);
  const [postText, setPostText] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [usersPost, setusersPost] = useState();
  const { user, myPro } = useContext(Authcontext);

  const handlePostText = (e) => {
    setPostText(e.target.value);
  };
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(
        "https://craft-connect-server-blond.vercel.app/usersPost"
      );
      const data = res.json();
      return data;
    },
  });

  const formSubmit = (event) => {
    event.preventDefault();
    const field = event.target;
    let currentData = new Date();
    const dd = String(currentData.getDate()).padStart(2, "0");
    const mm = String(currentData.getMonth() + 1).padStart(2, "0");
    const yyyy = currentData.getFullYear();
    currentData = mm + "/" + dd + "/" + yyyy;
    const likes = [];
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userPhoto = myPro[0]?.photoURL;

    const imageKey = "024d2a09e27feff54122f51afddbdfaf";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const formData = new FormData();
    if (selectedFile) {
      formData.append("image", selectedFile[0]);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          const img = data?.data?.display_url;
          const usersData = {
            userName,
            userEmail,
            userPhoto,
            currentDate: currentData,
            postText: postText,
            uniqueId: uuidv4(),
            img,
            likes,
          };
          // console.log("imgBB", img, data);

          fetch("https://craft-connect-server-blond.vercel.app/usersPost", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(usersData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Post Add Success");
                field.reset();
                setSelectedFile(undefined);
                setPostText("");
                refetch();
              }
            });
        });
    } else {
      const usersData = {
        userName,
        userEmail,
        userPhoto,
        currentDate: currentData,
        postText: postText,
        uniqueId: uuidv4(),
        img: null,
        likes,
      };
      fetch("https://craft-connect-server-blond.vercel.app/usersPost", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(usersData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Post Add Success");
            field.reset();
            setSelectedFile(undefined);
            setPostText("");
            setusersPost();
            refetch();
          }
        });
    }
  };

  return (
    <form
      onSubmit={formSubmit}
      className="text-white bg-white dark:bg-[#3F3F3F] shadow-lg mx-auto mt-7 lg:mt-3 rounded-md border border-[#FF3F4A]"
    >
      <div className="outline-1 flex gap-4  p-8">
        <img
          src={`${
            myPro[0]?.photoURL
              ? myPro[0]?.photoURL
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
          }`}
          className="h-[38px] w-[38px] object-cover rounded-full"
          alt=""
        />
        <textarea
          className="w-full bg-transparent  min-h-[100px] outline-none text-gray-900 dark:caret-[#FF3F4A] resize-none pr-4 dark:text-gray-200"
          placeholder="Share What are you thinking"
          onChange={(e) => {
            handlePostText(e);
          }}
        ></textarea>
      </div>
      <div className="divide"></div>
      <div className="add-options-message flex justify-between items-center py-3 p-8 pb-5">
        <div className="flex gap-3">
          <div onClick={() => setOpen(true)}>
            <img src={camera} className="w-6 h-6" alt="" />
          </div>
          <div></div>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={() => setOpenPreviewPost(true)}
            className="border-[#FF3F4A] border dark:text-white text-black text-base  py-2 px-4 rounded mr-3"
          >
            Preview
          </button>
          <button
            type="submit"
            disabled={!postText && !selectedFile}
            className="disabled:cursor-not-allowed bg-[#FF3F4A] hover:bg-[#cc323b] text-white  py-2 text-base px-4 rounded"
          >
            Post Status
          </button>
        </div>
      </div>
      <ImageUploadModal
        open={open}
        preview={preview}
        setPreview={setPreview}
        setOpen={setOpen}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <PreviewPost
        openPreviewPost={openPreviewPost}
        setOpenPreviewPost={setOpenPreviewPost}
        preview={preview}
        postText={postText}
      />
    </form>
  );
};

export default PostBox;
