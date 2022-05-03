import { skills } from '../../../utils';
import Skill from './Skill';
import { v4 } from 'uuid';

const TechSkills = () => {
  return (
    <div className="w-[53%] mid:w-full mid:mt-12">
      {skills.map(_skill => {
        return <Skill {..._skill} key={v4()} />;
      })}
    </div>
  );
};

export default TechSkills;
