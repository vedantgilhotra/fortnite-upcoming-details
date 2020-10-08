import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome to fortnite API</h2>
            <h3>Go to <Link to='/shop'>Shop</Link> for New content details</h3>
        </div>
    )
}

export default Home
