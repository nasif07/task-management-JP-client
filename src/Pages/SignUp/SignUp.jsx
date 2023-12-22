import { Link, Navigate } from "react-router-dom";
import loginPhoto from "../../assets/4077407.jpg"
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
const SignUp = () => {
    const { emailPasswordSignIn, handleProfile, googleSignIn, user } = useContext(AuthContext);
    // console.log(user);
    const handleSignIn = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, photoURL, email, password);
        if (password.length < 6) {
            toast.error('password must be at least 6 characters')
            return;
        }
        emailPasswordSignIn(email, password)
            .then(res => {
                console.log(res);
                handleProfile(name, photoURL)
                toast.success('Register Successfull')
                window.location.href = '/';
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                toast.success('Register Successfull')
                window.location.href = '/';
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left flex items-center md:mt-16 lg:mt-0">
                    <img className=" md:max-w-[500px]" src={loginPhoto} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-md border-2 bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body rounded-xl">
                        <h1 className="text-3xl font-bold text-center pb-3">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="font-medium">
                            <p>Already have an account? <Link className="font-bold underline" to={"/login"}>Login</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#E76F51] hover:text-black text-white text-lg">Sign Up</button>
                        </div>
                    </form>
                    <div className="px-8">
                        <button onClick={handleGoogleSignIn} className="p-2 w-full flex justify-center items-center gap-4 text-[16px] border-[#7E848C] border mt-4 rounded-xl font-semibold hover:border-[black] transition-all m-[32px] mx-auto"><FaGoogle></FaGoogle>Coutinue with Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;