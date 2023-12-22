import { FaDollarSign, FaHorse } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
// import { IoIosAddCircleOutline } from "react-icons/io";
import { FaBook,  } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <NavBar></NavBar>
            <div className='flex md:pt-[82px] lg:pt-[80px]'>
                <div className="w-64 min-h-screen bg-[#E76F51]">
                    <div className="w-30 rounded-full flex justify-center items-center p-8 pb-2">
                        <img className="rounded-full" alt="Tailwind CSS Navbar component" src={user.photoURL} />
                    </div>
                    <ul className="menu p-4 text-white text-lg">
                        <li>

                        </li>
                        <li>
                            <NavLink to={"/dashboard/addatask"}><FaBook></FaBook>Add a Task</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/todolist"}><FaTasks></FaTasks>Todo List</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={"/dashboard/myAddedPets"}><FaHorse></FaHorse>My Added Pets</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/createDonation"}><FaDonate></FaDonate>Create Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/myDonations"}><FaDollarSign></FaDollarSign>My Donations</NavLink>
                        </li> */}
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;