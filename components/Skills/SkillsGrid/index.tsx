import { skills } from '../../../utils';
import Skill from './Skill';
import { v4 } from 'uuid';

const TechSkills = () => {
  return (
    <div>
      {skills.map(_skill => {
        return <Skill {..._skill} key={v4()} />;
      })}
    </div>
  );
};

export default TechSkills;
