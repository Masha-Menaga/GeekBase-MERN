import React from 'react'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <h1>Navigation</h1>
            <Home />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout