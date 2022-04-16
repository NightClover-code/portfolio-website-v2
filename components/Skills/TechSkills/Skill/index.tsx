interface SkillProps {
  title: string;
  mastery: string;
}

const Skill: React.FC<SkillProps> = ({ title, mastery }) => {
  return (
    <div className="mt-12">
      <h4 className="font-semibold text-sm">{title}</h4>
      <div className="relative bg-gray w-[600px] h-[6px] mt-2">
        <div
          className={`absolute left-0 top-0 bg-blue h-[6px]`}
          style={{ width: mastery }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
