import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content">
            <footer className="footer p-10 max-w-[1600px] mx-auto">
            <aside>
            <div className="flex-1 text-2xl font-bold"><span className="text-[#e76f51]">Project</span>Pulse</div>
                <p>Project Pulse Task Management Website<br />too easy and comfortable your work</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a><FaLinkedin className="text-3xl"></FaLinkedin></a>
                    <a><FaFacebook className="text-3xl"></FaFacebook></a>
                    <a><FaGithub className="text-3xl"></FaGithub></a>
                </div>
            </nav>
        </footer>
        </div>
    );
};

export default Footer;