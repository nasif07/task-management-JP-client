import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        <div>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={"/login"}></Navigate>
    );
};

export default ProtectRoute;