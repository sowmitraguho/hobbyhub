import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigation } from "react-router";
import LoadingPage from '../Components/LoaderSkeleton/LoadingPage';

const MainLayouts = () => {
    const navigation = useNavigation();
    //const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header />
            {navigation.state === "loading" ? (
                <LoadingPage />
            ) : (
                <Outlet />)}
            < Footer />
        </div>
    );
};

export default MainLayouts;