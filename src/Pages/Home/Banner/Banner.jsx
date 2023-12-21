import banner from "../../../assets/todoBanner.jpg"
const Banner = () => {
    return (
        <div className="hero min-h-screen text-white" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Organize your work and life, finally.</h1>
                    <p className="mb-5">Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</p>
                    <button className="btn btn-primary">Let’s Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;