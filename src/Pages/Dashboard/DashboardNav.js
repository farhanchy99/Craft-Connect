import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <>
            <nav className="bg-[#2A2A2A]  border-b border-[#FF3F4A] fixed z-30 w-full">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <Link
                                to="/"
                                className="text-xl font-bold flex items-center lg:ml-2.5"
                            >
                                <span className="self-center whitespace-nowrap text-white">
                                    Craft Connect
                                </span>
                            </Link>
                            <form
                                action="#"
                                method="GET"
                                className="hidden lg:block lg:pl-32"
                            >
                                <label htmlFor="topbar-search" className="sr-only">
                                    Search
                                </label>
                                <div className="mt-1 relative lg:w-64">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        id="topbar-search"
                                        className="border bg-[#3F3F3F] text-gray-100 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#3F3F3F] block w-full pl-10 p-2.5"
                                        placeholder="Search"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center">
                            <button
                                id="toggleSidebarMobileSearch"
                                type="button"
                                className="lg:hidden text-white hover:text-gray-100 hover:bg-[#3F3F3F] p-2 rounded-lg"
                            >
                                <span className="sr-only">Search</span>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button
                                id="toggleSidebarMobile"
                                aria-expanded="true"
                                aria-controls="sidebar"
                                className="lg:hidden mr-2 text-white hover:text-gray-100 hover:bg-[#3F3F3F] cursor-pointer p-2 rounded"
                            >
                                <svg
                                    id="toggleSidebarMobileHamburger"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <svg
                                    id="toggleSidebarMobileClose"
                                    className="w-6 h-6 hidden"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default DashboardNav;