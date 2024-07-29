import React, { useState } from 'react';
import { Nav } from 'reactstrap';
import SkillsNav from './SkillsNav';
import SkillsChart from './SkillsChart';
import skillsData from "./data/skills.json";
import LanguagesData from "./data/languages.json";
import "./assets/skills.css";

function Skills() {
  const [skillsSelected, setSkillsSelected] = useState<string>("coding");

  const selectSkills = (skillsType: string) => {
    console.log(skillsType);
    setSkillsSelected(skillsType);
  }

  return (
    <>
      <div className="skills__content" id='skills'>
        <div className="skills__title">
          Skills
        </div>
        <SkillsNav selectSkills={selectSkills} />
        <SkillsChart skillsSelected={skillsSelected} skillsData={skillsData} languagesData={LanguagesData} />
      </div>
    </>
  );
}

export default Skills;