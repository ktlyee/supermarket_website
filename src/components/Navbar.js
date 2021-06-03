import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-24 bg-white shadow-lg'>
            <Link to='/' className='pl-8 font-bold text-2xl'>SuperMarket</Link>    
            <div className='inline-block pr-8'>
                <NavLink to='/' exact className='navlink-right' activeClassName='active'>Home</NavLink>
                <NavLink to='/about' exact className='navlink-right' activeClassName='active'>About us</NavLink>
                <NavLink to='/products' exact className='navlink-right' activeClassName='active'>Products</NavLink>
                <Link to='/cart' className='btn-cart'>Cart(0)</Link>
            </div>      
        </nav>
    )
}

export default Navbar;
