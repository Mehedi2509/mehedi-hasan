import { BiCodeAlt } from "react-icons/bi"
import ServiceCard from "./ServiceCard"
import { SiAntdesign } from "react-icons/si"
import { AiTwotoneAppstore } from "react-icons/ai"
import { FaAppStoreIos } from "react-icons/fa"


const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServiceCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServiceCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServiceCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServiceCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  )
}

export default MyServices