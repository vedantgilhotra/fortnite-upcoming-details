import React from 'react';
import{ Link, withRouter } from 'react-router-dom';


const Nav = () => {
    const navstyle = {
        color: 'white'
    }

    return (
        <div className='nav'>
            <h2>React</h2>
            <ul>
                <Link style={navstyle} to='/' >
                <li>Home</li>
                </Link>
                <Link style={navstyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navstyle} to='/shop'>
                <li>Shop</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
