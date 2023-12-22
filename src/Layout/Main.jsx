import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Main;