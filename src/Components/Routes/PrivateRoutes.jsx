import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthContext';
import { useNavigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const navigate = useNavigate();

    const {loggedInUser} = useContext(AuthContext);

    if(!loggedInUser) {
        navigate('/login');
    }


    return children;
};

export default PrivateRoutes;