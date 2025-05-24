import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayouts;