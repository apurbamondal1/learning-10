import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Login from '../Login/Login';





const Main = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;