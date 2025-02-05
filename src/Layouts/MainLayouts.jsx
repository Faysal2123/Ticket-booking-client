import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
        </div>
    );
};

export default MainLayouts;