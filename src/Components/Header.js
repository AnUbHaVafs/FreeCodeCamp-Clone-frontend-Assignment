import React from 'react';
import './Header.css';
import { Link, Outlet } from 'react-router-dom';
import Image from '../images/1.jpg';

const Header = () => {
    return (
        <div className='site-wrapper'>
            <div className='site-nav '>
                <div className='item1'>
                    <input className='search-input' type="search" placeholder='Search 9,700+ tutorials' />
                </div>
                <div className='item2'>
                    <img src={Image} alt='' />
                </div>
                <div className='item3'>
                    <button className='btn-donate donate'>Donate</button>
                    <Link to={'/signin'} className='btn-signin signin'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;  