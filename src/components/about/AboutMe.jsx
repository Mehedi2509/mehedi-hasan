/* eslint-disable react/no-unescaped-entities */


const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm MD MEHEDI HASAN,</h2>
          <p className="text-base leading-6 ">
            a passionate Front-End web developer and i love taking challenges of solving various problems with different approach. I build responsive user-friendly websites that look visually appealing, with nice and fluid interactions, close attention to User Experience, and are accessible to the visually impaired.
          </p>
          <p className="text-base leading-6 mt-4">
            I create web experiences using HTML, CSS, Javascript, React JS, Tailwind, and Node JS, Express JS, Mongo DB . Being passionate, diligent and result oriented, I always work towards achieving best result on each project I lay my hands on.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            22
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Bangladeshi
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Bogura, Bangladesh
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe