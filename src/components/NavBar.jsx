import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <div className='nav-bar'>
            <Link to='/'>Heroes</Link>
            <Link to='/items'>Items</Link>
        </div>
    )
}
export default NavBar;