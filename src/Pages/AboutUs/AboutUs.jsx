
import Container from "../../Components/Container";
import image from "../../assets/client.jpg"
// import aboutUsImg from "../../../assets/aboutUs.jpg"
import { MdOutlineVerified } from "react-icons/md";

const AboutUs = () => {
    return (
        <Container>
            <div>
                {/* <Title heading={"About Us"} subHeading={"Connecting Hearts, One Paw at a Time"}></Title> */}
                <h1 className="text-4xl lg:hidden font-bold text-center pt-[100px]">About Us</h1>
                <div>
                    <div className="hero p-0 min-h-screen ">
                        <div className="hero-content max-w-full p-0 flex-col gap-20 lg:flex-row">
                            <img src={image} className="lg:w-full md:w-[550px]  shadow-2xl max-w-[550px]" />
                            <div className="space-y-6 w-full">
                                <h1 className="text-5xl pb-4 font-bold">WE ARE BEST FOR YOUR CARE</h1>
                                <p className="text-black text-xl">
                                    Welcome to Project Pulse, where efficiency meets innovation in the realm of task management. As a cutting-edge platform designed to streamline your workflow and enhance productivity, we pride ourselves on being the catalyst for organizational success.</p>
                                <div className="pb-4">
                                    <div className="flex items-center gap-4">
                                        <MdOutlineVerified className="text-xl text-[#E76F51]"></MdOutlineVerified>
                                        <p className="text-xl text-[#676666]">Make a todo list</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MdOutlineVerified className="text-xl text-[#E76F51]"></MdOutlineVerified>
                                        <p className="text-xl text-[#676666]">Work work and word</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MdOutlineVerified className="text-xl text-[#E76F51]"></MdOutlineVerified>
                                        <p className="text-xl text-[#676666]">stay hard stay focus</p>
                                    </div>
                                </div>
                                <button>Watch Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;