import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUserCog } from "react-icons/fa";
import { MdOutlineRestaurantMenu, MdRateReview } from 'react-icons/md';
import { IoAddCircleSharp, IoFastFood, IoHome } from 'react-icons/io5';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrUnorderedList } from 'react-icons/gr';
import useAdmin from '../Hooks/useAdmin';

const Dashbroad = () => {
  const [isAdmin, isAdminLoading] = useAdmin();



  return (
    <div className="flex gap-10 flex-col w-full  md:3/12 md:flex-row">
      <div className="w-full md:w-96 min-h-screen bg-orange-400">
        <ul className="menu p-4 gap-5">
          {isAdmin ? (
            <>
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/adminHome" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/addItems" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <MdOutlineRestaurantMenu /> Add Item
                </NavLink>
              </li>
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/manageitems" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
             
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/alluser" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <FaUserCog /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/userHome" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <FaHome /> User Home
                </NavLink>
              </li>
             
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/review" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <MdRateReview /> Add Review
                </NavLink>
              </li>
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/paymentHistory" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <IoAddCircleSharp /> Pyment History
                </NavLink>
              </li>
              <li className="text-xl font-semibold flex rounded-lg gap-2">
                <NavLink to="/dashbroad/cart" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
            </>
          )}

          <div className="divider text-black"></div>
          <li className="text-xl font-semibold flex rounded-lg gap-2">
            <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
              <IoHome /> Home
            </NavLink>
          </li>
          <li className="text-xl font-semibold flex rounded-lg gap-2">
            <NavLink to="/menu" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
              <IoFastFood /> Our Menu
            </NavLink>
          </li>
          <li className="text-xl font-semibold flex rounded-lg gap-2">
            <NavLink to="/orderfood/salad" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
              <GrUnorderedList /> Order Food
            </NavLink>
          </li>
          <li className="text-xl font-semibold flex rounded-lg gap-2">
            <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
              <BiSolidPhoneCall /> Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-8/12 flex-col flex md:flex-row md:p-8 justify-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbroad;
