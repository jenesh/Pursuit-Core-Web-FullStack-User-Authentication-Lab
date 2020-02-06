import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ logoutUser, isUserLoggedIn }) => {
    const LoggedInRoutes = () => (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
            <button className='btn btn-logout' onClick={logoutUser}>Logout</button>
        </>
    )
    const LoggedOutRoutes = () => (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </nav>
    )
    return (
        <div>
            {isUserLoggedIn ? LoggedInRoutes() : LoggedOutRoutes()}
        </div>
    )
}

export default Navbar
