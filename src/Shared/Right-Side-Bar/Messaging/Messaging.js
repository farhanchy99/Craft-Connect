import React from "react";

const Messaging = () => {
  return (
    <div>
      <div className="flex h-96 antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col flex-auto h-full">
            <div className="flex flex-col flex-auto flex-shrink-0 h-full p-2">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-start-1 col-end-10 p-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="relative ml-2 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-10 p-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="relative ml-2 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-4 col-end-13 p-1 rounded-lg">
                      <div className="flex items-center justify-start flex-row-reverse">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          B
                        </div>
                        <div className="relative mr-2 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-4 col-end-13 p-1 rounded-lg">
                      <div className="flex items-center justify-start flex-row-reverse">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          B
                        </div>
                        <div className="relative mr-2 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-10 p-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="relative ml-2 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>Lorem ipsum dolor sit amet !</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-4 col-end-13 p-1 rounded-lg">
                      <div className="flex items-center justify-start flex-row-reverse">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          B
                        </div>
                        <div className="relative mr-2 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                          <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                            Seen
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-10 p-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="relative ml-2 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-10 p-1 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="relative ml-2 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div className="flex flex-row items-center">
                            <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </button>
                            <div className="flex flex-row items-center space-x-px ml-4">
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-12 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="px-1">
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-grow">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex w-10/12 border rounded-lg focus:outline-none focus:border-indigo-300 h-10 bg-gray-200 px-2"
                      placeholder="Type here..."
                    />
                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="">
                  <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span className="">
                      <svg
                        className="w-4 h-4 transform rotate-90 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
