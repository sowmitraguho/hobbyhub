import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const location = useLocation();

    const {loggedInUser} = useContext(AuthContext);
    console.log('from private routes', loggedInUser);

    if(!loggedInUser) {
        
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }


    return children;
};

export default PrivateRoutes;