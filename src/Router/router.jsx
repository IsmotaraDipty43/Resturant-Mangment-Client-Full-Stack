import React from 'react';

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../Pages/HomeLayout/Home';
import MainLayout from '../Layout/MainLayout';
import OurMenu from '../Pages/MenuLayout/OurMenu';
import Orderfood from '../Pages/OrderFood/Orderfood';
import Login from '../Pages/Authentication/Login';
import Signup from '../Pages/Authentication/Signup';
import Private from './Private';
import Dashbroad from '../Layout/Dashbroad';
import Cartt from '../Pages/Dashbroad/Cartt';
import Allusers from '../Pages/Dashbroad/Allusers';
import ContactUs from '../Pages/Contact/ContactUs';
import AddItem from '../Pages/Dashbroad/AddItem';
import AdminRoute from './AdminRoute';
import AdminHome from '../Pages/Dashbroad/AdminHome';
import Manageitem from '../Pages/Dashbroad/ManageItem/Manageitem';
import Updateitem from '../Pages/Dashbroad/Updateitem';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
   {
    path:'/',
    element:<Home></Home>
   },
   {
    path:'/menu',
    element:<OurMenu></OurMenu>
   },
   {
    path:'/orderfood/:category',
    element:<Orderfood></Orderfood>
   },
   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/reg',
    element:<Signup></Signup>
   },
  //  {
  //   path: '/contact',
  //   element: <ContactUs></ContactUs>
  // }
   
      ]
    },
    {
      path: 'dashbroad',
      element: <Private><Dashbroad></Dashbroad></Private>,
      children: [
        //user routes
        {

          path: 'cart',
          element: <Cartt></Cartt>
        },
        //admin routes
        {
       
          path: 'alluser',
          element: <AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
          path: '/dashbroad/addItems',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'/dashbroad/adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'/dashbroad/manageitems',
          element:<AdminRoute><Manageitem></Manageitem></AdminRoute>
        },
        {
          path:'/dashbroad/update/:id',
          element:<AdminRoute><Updateitem></Updateitem></AdminRoute>,
          loader: ({params})=> fetch(`https://bistro-boss-server-nine-jade.vercel.app/menu/${params.id}`)
        },
      ]
    },

    

  ]);




export default router;