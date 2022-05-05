import { skills } from '../../../utils';
import Skill from './Skill';
import { v4 } from 'uuid';

const TechSkills = () => {
  return (
    <div className="w-[48%] mid:mt-12 mid:w-full">
      {skills.map(_skill => {
        return <Skill {..._skill} key={v4()} />;
      })}
    </div>
  );
};

export default TechSkills;
