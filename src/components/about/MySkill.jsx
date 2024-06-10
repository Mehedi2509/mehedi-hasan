import { BsTrophyFill } from 'react-icons/bs'
import SkillCard from './SkillCard'
import { SiAntdesign } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import { IoLogoYoutube } from 'react-icons/io'

const MySkill = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <SkillCard icon={<BsTrophyFill />} des="10 Awards Won" />
      <SkillCard icon={<SiAntdesign />} des="20 Finished Projects" />
      <SkillCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <SkillCard icon={<IoLogoYoutube />} des="1.5k Subscription" />
    </div>
  )
}

export default MySkill