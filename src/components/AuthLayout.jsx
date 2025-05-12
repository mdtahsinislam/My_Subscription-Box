import React from 'react';
import Navbarr from './Navbarr';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            {/* <h1>Authentication Layout</h1> */}
            <header>
                <Navbarr></Navbarr>
            </header>

            <main className="w-11/12 mx-auto py-5">
              

<Outlet></Outlet>

            </main>
        </div>
    );
};

export default AuthLayout;