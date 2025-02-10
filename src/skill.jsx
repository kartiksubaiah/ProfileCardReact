/*eslint-disable react/prop-types*/

const Skill = ({ skillObj }) => {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.name}
      {skillObj.level === "beginner" && "👶"}
      {skillObj.level === "intermediate" && "👍"}
      {skillObj.level === "advanced" && "💪"}
    </div>
  );
};

export default Skill;
