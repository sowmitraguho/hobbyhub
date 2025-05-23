import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    

    const {loggedInUser} = useContext(AuthContext);

    if(!loggedInUser) {
        
        return <Navigate to='/login'></Navigate>
    }


    return children;
};

export default PrivateRoutes;