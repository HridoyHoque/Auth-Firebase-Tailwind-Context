import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;