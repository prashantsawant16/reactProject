import React from 'react'
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
    <div className="menu">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/restaurant">Restaurant</Link>
            </li>
            <li>
                <Link to="/test">Test</Link>
            </li>
        </ul>
    </div>
    <Outlet/>
    </>
  )
}

export default Layout
