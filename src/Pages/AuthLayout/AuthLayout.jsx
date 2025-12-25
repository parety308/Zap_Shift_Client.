import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../../components/Logo/Logo';

const AuthLayout = () => {
    return (
        <div>
            <div className='m-4'>
                <Logo />
            </div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;