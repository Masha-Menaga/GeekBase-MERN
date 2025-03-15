import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import ApiAxios from './ApiAxios'


const Home = () => {
    const { handleLogoutAuth } = useContext(AuthContext)

    return (
        <div >
            <nav style={{ display: "flex", gap: "20px" }}>
                <Link to="/">Home</Link>
                <Link to="/about">AboutUs</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contactus</Link>
            </nav>


            <button onClick={handleLogoutAuth}>Logout</button>
            <ApiAxios />
        </div >
    )
}

export default Home