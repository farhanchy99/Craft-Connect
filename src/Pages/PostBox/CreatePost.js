import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";
import { Dialog, Transition } from "@headlessui/react";
import Form from "./Form";
const CreatePost = ({ open, setOpen }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [postDisabled, setPostDisabled] = useState();
  const [uniqueId, setUniqueId] = useState('');
  const cancelButtonRef = useRef(null);
  const { user, refetch } = useContext(Authcontext);
  const [preview, setPreview] = useState([]);
  const [closeUploadPhotoBox, setCloseUploadPhotoBox] = useState(false);
  const navigate = useNavigate();
  const handlePostTextChange = (event) => {
    setPostDisabled(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    const field = event.target;
    const postText = field?.postText?.value;
    let currentData = new Date();
    const dd = String(currentData.getDate()).padStart(2, "0");
    const mm = String(currentData.getMonth() + 1).padStart(2, "0");
    const yyyy = currentData.getFullYear();
    currentData = mm + "/" + dd + "/" + yyyy;
    console.log(currentData.getTime())

    const imageKey = "024d2a09e27feff54122f51afddbdfaf";
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const formData = new FormData();
    formData.append("image", selectedFile[0]);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        makeid(12)
        const img = data?.data?.url;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const userPhoto = user?.photoURL;
        const usersData = {
          userName,
          userEmail,
          userPhoto,
          currentData,
          postText,
          img,
          uniqueId
        };
        fetch("https://craft-connect-server.vercel.app/usersPost", {
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
              navigate("/");
              field.reset();
              refetch();
              setSelectedFile(undefined);
            }
          });
      });
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const selectedFIles = [];
    const targetFilesObject = [...selectedFile];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });

    setPreview(selectedFIles);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(selectedFIles);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files?.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files);
  };
  function makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return setUniqueId(result);
}


  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-[6px] backdrop-brightness-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-zinc-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white dark:bg-zinc-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 className="py-4 text-center text-xl font-bold text-black dark:text-white">
                      Create Post
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 cursor-pointer absolute right-[25px] top-[20px]"
                      onClick={() => {
                        setOpen(false);
                      }}
                      ref={cancelButtonRef}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <div className="flex justify-between items-center bg-gray-100 dark:bg-zinc-700 p-2 rounded">
                      <div className="flex items-center gap-3 ">
                        {/* image source is hardcode now */}
                        <img
                          src="https://avatars.githubusercontent.com/u/94055231?v=4"
                          className="h-12 w-12 rounded-full"
                          alt=""
                        />
                        <div className="">
                          <p className="text-xl font-medium dark:text-white text-black">
                            {user.displayName}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <Form
                      setOpen={setOpen}
                      closeUploadPhotoBox={closeUploadPhotoBox}
                      postDisabled={postDisabled}
                      selectedFile={selectedFile}
                      onSelectFile={onSelectFile}
                      formSubmit={formSubmit}
                      setCloseUploadPhotoBox={setCloseUploadPhotoBox}
                      preview={preview}
                      handlePostTextChange={handlePostTextChange}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CreatePost;
