import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Nmavbar/Navbar';
import Fooeter from '../Footer/Fooeter';

const MainLayOut = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
       <Fooeter></Fooeter> 
        </div>
    );
};

export default MainLayOut;