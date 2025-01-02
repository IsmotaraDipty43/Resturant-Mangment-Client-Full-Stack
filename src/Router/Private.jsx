import React, { useContext } from 'react';
import  { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';

const Private = ({children}) => {
    const {user,   loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Private;