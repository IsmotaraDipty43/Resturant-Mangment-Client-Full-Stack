import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navber = () => {
  const {user, logOut} = useContext(AuthContext)
const navOptions = <>
<NavLink to='/' > <li><a>Home</a></li></NavLink>
<NavLink to='/menu'> <li><a>Our Menu</a></li></NavLink>
<NavLink to='/orderfood/salad'> <li><a>Order Food</a></li></NavLink>
<NavLink> <li><a>Contact Us</a></li></NavLink>
<NavLink to='/dashbroad' > <li><a>Dashbroad</a></li></NavLink>

</>

const handleLogout = ()=>{
  logOut()
  .then(()=>{

  })
  .catch(error=>{
    console.log(error);
  })
}

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg text-semibold">
       {navOptions}
      </ul>
    </div>
<div className='flex flex-col gap-1'>
<a className="btn btn-ghost text-xl">BISTROBOSS</a>
</div>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg text-semibold">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end gap-5">
  {
  user ? <><button onClick={ handleLogout} className="btn">Logout</button> </> : <>    <NavLink to='/login' className='btn '>Login</NavLink> </>
}
  
 
  </div>
</div>
        </div>
    );
};

export default Navber;