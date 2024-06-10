import { Link, Outlet } from "react-router-dom";
import { IoIosPaper } from "react-icons/io";
import { SiGooglechat } from "react-icons/si";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import RoundOne from "../components/roundDesigns/RoundOne";
import RoundTwo from "../components/roundDesigns/RoundTwo";
import RoundThree from "../components/roundDesigns/RoundThree";
import RoundFour from "../components/roundDesigns/RoundFour";
import RoundFive from "../components/roundDesigns/RoundFive";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import HomeMain from "../components/home/HomeMain";


function MainLayouts() {
    return (
        <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
            <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
                <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0">
                    {/* ================= Navbar Start here ======================== */}
                    <div className="w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4">
                        <div className="w-full h-80 bg-bodyColor rounded-3xl flex flex-col items-center justify-between py-6">
                            <Link to={"/"} className="w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                                <FaUser />
                                <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                    About
                                </span>
                            </Link>
                            <Link to={"/resume"} className="w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">  
                                <IoIosPaper />
                                <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                    Resume
                                </span>
                            </Link>
                            <Link to={"/portfolio"} className="w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                                <MdWork />
                                <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                    Portfolio
                                </span>
                            </Link>
                            <Link to={"/blog"} className="w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                                <SiGooglechat />
                                <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                    Blog
                                </span>
                            </Link>
                            <Link to={"/contact"} className="w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
                                <FaEnvelope />
                                <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                    Contact
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* ================= Navbar End here ====================== */}
                    <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
                        {/* ======================== Home Left Start here ============================ */}
                        <HomeMain />
                        {/* ======================== Home Left End here ============================== */}
                        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">
                        {/* ======================== Smaller device content Start ======================== */}
                        <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
                            <About />
                            <Resume />
                            <Portfolio />
                            <Blog />
                            <ContactUs />
                        </div>
                        {/* ======================== Smaller device content End ========================== */}
                        <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
                            <Outlet/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 z-10">
                <RoundOne />
                <RoundTwo />
                <RoundThree />
                <RoundFour />
                <RoundFive />
            </div>
        </div>
    )
}

export default MainLayouts;
