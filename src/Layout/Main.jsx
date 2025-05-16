import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedPages/Footer';
import Navbar from '../sharedPages/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;