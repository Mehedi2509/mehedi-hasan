import { BsCloudLightningFill } from "react-icons/bs"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { bannerImgTwo } from "../../assets"
import { MdMail } from "react-icons/md"


const HomeMain = () => {
    const [text] = useTypewriter({
        words: ["Front-End Developer", "MERN Stack Developer", "WordPress Developer"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000,
      });

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
    <div className="w-full h-3/5">
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={bannerImgTwo}
        loading="priority"
        alt="bannerImage"
      />
    </div>
    <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
      <div className="flex flex-col items-center gap-2 py-10">
        <h1 className="text-textColor text-36px font-semibold">MD MEHEDI HASAN</h1>
        <p className="text-base text-designColor tracking-wide">
          {text}
          <Cursor cursorBlinking="false" cursorStyle="|" />
        </p>
        <div className="flex justify-center gap-4 mt-5">
          <a href="https://github.com/Mehedi2509" className="hover:text-designColor duration-300 cursor-pointer text-28px">
            <FaGithub />
          </a>
          <a href="" className="hover:text-designColor duration-300 cursor-pointer text-28px">
          <FaFacebookF />
          </a>
          <a href="" className="hover:text-designColor duration-300 cursor-pointer text-28px">
          <FaLinkedinIn />
          </a>
          <a href="" className="hover:text-designColor duration-300 cursor-pointer text-28px">
          <FaWhatsapp />
          </a>
          <a href="" className="hover:text-designColor duration-300 cursor-pointer text-28px">
          <MdMail />
          </a>
        </div>
      </div>
      <div className="flex h-14">
        <a
          href=""
          target="_blank"
          className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
          rel="noreferrer"
        >
          <button className="w-full h-full flex justify-center items-center gap-2 uppercase">
            Download Resume <BsCloudLightningFill />
          </button>
        </a>
        <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
          Contact me <FiSend />
        </button>
      </div>
    </div>
  </div>
  )
}

export default HomeMain