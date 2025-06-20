import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../sharedPages/Footer';
import Navbar from '../sharedPages/Navbar';

const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;