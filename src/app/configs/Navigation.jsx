import React from 'react';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const counter = useSelector((state) => state.fuse.navbar.navbardata) 
    return (
        <div>{counter}</div>
    );
};

export default Navigation;