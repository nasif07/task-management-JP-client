import { Link } from "react-router-dom";
import loginPhoto from "../../assets/4077407.jpg"
import { FaGoogle } from "react-icons/fa";
const SignUp = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left flex items-center md:mt-16 lg:mt-0">
                <img className=" md:max-w-[500px]" src={loginPhoto} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-md border-2 bg-base-100">
                <form className="card-body">
                <h1 className="text-3xl font-bold text-center pb-3">Register now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="font-medium">
                        <p>Already have an account? <Link className="font-bold underline" to={"/login"}>Login</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#E76F51] hover:text-black text-white text-lg">Sign Up</button>
                    </div>
                    
                    <div>
                        <button className="p-2 w-full flex justify-center items-center gap-4 text-[16px] border mt-4 rounded-xl font-semibold hover:border-black transition-all"><FaGoogle></FaGoogle>Coutinue with Google</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;