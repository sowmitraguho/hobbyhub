import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { ClipLoader } from 'react-spinners';


const PrivateRoutes = ({ children }) => {

    const location = useLocation();

    const { loggedInUser, loading } = useContext(AuthContext);
    console.log('from private routes', loggedInUser);

    if (loading) {
        return <div>
            <ClipLoader
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    if (!loggedInUser) {
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }


    return children;
};

export default PrivateRoutes;