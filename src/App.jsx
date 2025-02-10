import Bio from "./Bio";
import Skill from "./skill";
import { skill } from "./skillobj";
import "./app.css";
import ProfPic from "./assets/AlfredPic.png";

const App = () => {
  return (
    <div className="card">
      <h1>Profile Card</h1>
      <img src={ProfPic} alt="Profile Picture" />
      <div className="container">
        <div className="info">
          <h2>Kartik Subaiah</h2>
          <Bio />
        </div>
        <div className="skillset">
          {skill.map((sk) => (
            <Skill skillObj={sk} key={sk.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
