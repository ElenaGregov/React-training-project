import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';

const Navbar = ({ setIsAuth }) => {

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Log out
            </MyButton>
            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;