import AboutMe from "../components/about/AboutMe";
import MyServices from "../components/about/MyServices";
import MySkill from "../components/about/MySkill";
import Title from "../components/home/Title";


const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Services" />
      <MyServices />
      <Title title="My" subTitle="Skills" />
      <MySkill />
    </section>
  );
}

export default About