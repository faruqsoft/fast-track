import React from 'react';
import { Outlet } from 'react-router';

const mainLayouts = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default mainLayouts;