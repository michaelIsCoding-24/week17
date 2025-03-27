import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return(
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/help">Help</NavLink>
        </div>
    </nav>
    <Outlet/>
    </>
    )
}