import Title from "../components/home/Title"
import Education from "../components/resume/Education"
import Skills from "../components/resume/Skills"


const Resume = () => {
  return (
    <section id="resume">
      <Title title="My" subTitle="Resume" />
      <Education />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  )
}

export default Resume