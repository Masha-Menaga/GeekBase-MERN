import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div >
            <nav style={{ display: "flex", gap: "20px" }}>
                <Link to="/">Home</Link>
                <Link to="/about">AboutUs</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contactus</Link>
            </nav>



        </div >
    )
}

export default Home