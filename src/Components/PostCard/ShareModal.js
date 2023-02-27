
import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
const ShareModal = ({ opens, setOpens, postId }) => {
    const location = window.location.href;
    const cancelButtonRef = useRef(null);
    return (
        <Transition.Root show={opens} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-100000"
                initialFocus={cancelButtonRef}
                onClose={() => setOpens(false)}
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
                    <div className="fixed inset-0 backdrop-blur-[2px] backdrop-brightness-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex h-screen justify-center items-center p-4 text-center  mt-12 sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-100"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            
                            <div className="bg-gray-100 dark:bg-[#3F3F3F] w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-1/3">
                                {/* <!--MODAL HEADER--> */}
                                <div
                                    className="flex justify-between items center border-b border-gray-200 py-3"
                                >
                                    <div className="flex items-center justify-center" >
                                        <p className="text-xl font-bold text-gray-800 dark:text-white">Share Your Posts</p>
                                    </div>

                                    <div
                                    onClick={() => { setOpens(false) }}
                                        className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
                                    >
                                        x 
                                    </div>
                                </div>

                                {/* <!--MODAL BODY--> */}
                                <div className="my-4">
                                    <p className="text-sm">Share this link via</p>

                                    <div className="flex justify-around my-4 gap-5">
                                        <FacebookShareButton url={`${location}postDetails/${postId}`}>
                                            <FacebookIcon size={40} round={true} />
                                        </FacebookShareButton>
                                        <WhatsappShareButton url={`${location}postDetails/${postId}`}>
                                            <WhatsappIcon size={40} round={true}/>
                                        </WhatsappShareButton>
                                        <TelegramShareButton url={`${location}postDetails/${postId}`}>
                                            <TelegramIcon size={40} round={true}/>
                                        </TelegramShareButton>

                                    </div>

                                    <p className="text-sm">Or copy link</p>
                                    {/* <!--BOX LINK--> */}
                                    <div className="border-2 border-gray-200 flex justify-between items-center mt-4 py-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-gray-500 ml-2"
                                        >
                                            <path
                                                d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"
                                            ></path>
                                            <path
                                                d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"
                                            ></path>
                                        </svg>

                                        <input className="w-full outline-none bg-transparent" type="text" placeholder="link" value={`${location}postDetails/${postId}`} />

                                       
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ShareModal;



