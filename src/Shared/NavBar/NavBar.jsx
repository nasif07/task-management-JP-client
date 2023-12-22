import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navLinks = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#e76f51]" : ""}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/petLesting" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#e76f51]" : ""}>
                Pet Lesting
            </NavLink>
        </li>
        <li>
            <NavLink to="/donationcampaign" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#e76f51]" : ""}>Donation Campaigns
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
                        <ul className="gap-6 menu-horizontal font-semibold text-lg">
                            {/* Navbar menu content here */}
                           {navLinks}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;