import { workImgEight, workImgFive, workImgFour, workImgOne, workImgSeven, workImgSix, workImgThree, workImgTwo } from "../assets"
import Title from "../components/home/Title"
import PortfolioCard from "../components/portfolio/PortfolioCard"


const Portfolio = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <PortfolioCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
          />
          <PortfolioCard
            title="Business Card Design"
            category="Design"
            image={workImgOne}
          />
          <PortfolioCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />
          <PortfolioCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <PortfolioCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <PortfolioCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <PortfolioCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <PortfolioCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>  )
}

export default Portfolio