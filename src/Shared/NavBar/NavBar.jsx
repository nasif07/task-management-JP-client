import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        window.location.href = '/';
    }
    const navLinks = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#e76f51]" : ""}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/aboutus" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#e76f51]" : ""}>
                About Us
            </NavLink>
        </li>
        
        <li>
            {/* <NavLink to="/login" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#e76f51]" : ""}>
                    Login
            </NavLink> */}

            {/* {
                user ?
                    ''
                    :
                    <Link to="/login">
                        <button className="btn">Login</button></Link>
            } */}
        </li>
        
        {user ? <div className="dropdown dropdown-end py-2">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-100 text-black rounded-box w-52">
                <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                <li><button onClick={handleLogOut}><a>Logout</a></button></li>
            </ul>
        </div> : <li>
            <NavLink to="/login" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#e76f51]" : ""}>Login
            </NavLink>
        </li>}
    </>
    return (
        <div className="drawer md:px-10 fixed bg-black z-10 bg-opacity-10 text-white">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar max-w-[1600px] mx-auto">
                    <div className="flex-none md:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 mx-2 text-2xl font-bold"><span className="text-[#e76f51]">Project</span>Pulse</div>
                    <div className="flex-none hidden md:block">
                        <ul className="gap-6 menu-horizontal font-semibold text-lg flex justify-center items-center">
                            {/* Navbar menu content here */}
                            {navLinks}

                        </ul>

                    </div>
                </div>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-black flex items-center">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;