import banner from "../../../assets/todoBanner.jpg"
const Banner = () => {
    const myStyle = {
        backgroundImage: `url(${banner})`,
        backgroundColor: "rgba(0,0,0,0.15)",
        backgroundPosition: "center",
    }
    return (
        <>
        <div className=" bg-cover h-100vh" style={myStyle} >
            <div className="h-[100vh] text-center" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="pl-8 ml:pl-0 max-w-[1500px] mx-auto text-white pt-20 md:pt-[200px] font-kanit">
                    <h1 className="mb-5 text-3xl md:text-7xl font-bold">Organize your work <br /> and life, <span className="text-[#e76f51]">finally.</span></h1>
                    <p className="mb-10 md:text-xl">Become focused, organized, and calm with Todoist. <br /> The world’s #1 task manager and to-do list app.</p>
                   <button className="p-3 rounded-lg hover:bg-[#F7B787] btn-outline transition-all hover:text-black bg-[#e76f51] text-white">Let’s Explore</button>
                </div>
            </div>
        </div>
    </>
    );
};

export default Banner;