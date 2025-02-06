import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-284px)]'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;