import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface SkillProps {
  title: string;
  mastery: string;
}

const Skill: React.FC<SkillProps> = ({ title, mastery }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap
      .timeline({ defaults: { ease: 'in' } })
      .from(ref.current, { width: 0, duration: 0 })
      .to(ref.current, { width: mastery, duration: 1 });
  }, [mastery]);

  return (
    <div className="skill mt-10 xs:mt-8" data-aos="fade-up">
      <h3 className="font-semibold text-sm">{title}</h3>
      <div className="relative bg-gray w-full h-[6px] mt-2">
        <div
          className={`mastery absolute left-0 top-0 bg-blue h-[6px]`}
          ref={ref}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
