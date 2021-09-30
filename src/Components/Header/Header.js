import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const activeStyle ={
        color : 'crimson',
        borderBottom : '2px solid crimson'
    }
    return (
       <div className='header-container'>
           <div>
               <h1 className='header-logo'><span className='r-text'>R</span>ainBow Cooking</h1>
           </div>
            <nav>
            <NavLink className='nav-link' activeStyle={activeStyle} to='/home'>Home</NavLink> 
            <NavLink className='nav-link' activeStyle={activeStyle} to='/about'>About</NavLink> 
            <NavLink className='nav-link' activeStyle={activeStyle} to='/Food'>Food</NavLink> 
            <NavLink className='nav-link' activeStyle={activeStyle} to='/contact'>Contact</NavLink> 
        </nav>
       </div>
    );
};

export default Header;