import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <>
            <div className="flex overflow-hidden bg-[#3F3F3F] pt-16">
                {/* this is sideabr */}
                <aside
                    id="sidebar"
                    className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
                    aria-label="Sidebar"
                >
                    <div className="relative flex-1 flex flex-col min-h-0 border-r border-[#FF3F4A] bg-[#3F3F3F] pt-0">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex-1 px-3 bg-[#3F3F3F] divide-y space-y-1">
                                <ul className="space-y-2 pb-2">
                                    <li>
                                        <form action="#" method="GET" className="lg:hidden">
                                            <label htmlFor="mobile-search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg
                                                        className="w-5 h-5 text-gray-500"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="mobile-search"
                                                    className="bg-[#2A2A2A] border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                                                    placeholder="Search"
                                                />
                                            </div>
                                        </form>
                                    </li>
                                    {/* <li>
                                        <NavLink
                                            to="/dashboard/all-users"
                                            className="dashNav text-base  font-normal rounded-lg hover:border-[#3F3F3F] flex items-center p-2 hover:bg-[#2A2A2A] group"
                                        >
                                            <span className="ml-3">Users</span>
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink
                                            to="/dashboard/add-product"
                                            className="dashNav text-base  font-normal rounded-lg hover:border-[#3F3F3F] flex items-center p-2 hover:bg-[#2A2A2A] group"
                                        >
                                            <span className="ml-3">Add Product</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/your-product"
                                            className="dashNav text-base  font-normal rounded-lg hover:border-[#3F3F3F] flex items-center p-2 hover:bg-[#2A2A2A] group"
                                        >
                                            <span className="ml-3">Your Product</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/added-cart"
                                            className="dashNav text-base  font-normal rounded-lg hover:border-[#3F3F3F] flex items-center p-2 hover:bg-[#2A2A2A] group"
                                        >
                                            <span className="ml-3">Added Cart</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                <div
                    className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
                    id="sidebarBackdrop"
                />
                <div
                    id="main-content"
                    className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                ></div>
            </div>

        </>
    );
};

export default DashboardSidebar;