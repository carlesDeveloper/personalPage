import React from 'react';
import { Nav, NavItem } from 'reactstrap';

interface SkillsNavProps {
  selectSkills: (skillsType: string) => void;
}

const SkillsNav: React.FC<SkillsNavProps> = ({ selectSkills }) => {
  return (
    <div className="skills-nav">
      <Nav pills>
        <NavItem onClick={() => selectSkills("coding")}>
          Coding
        </NavItem>
        <NavItem onClick={() => selectSkills("languages")}>
          Languages
        </NavItem>
      </Nav>
    </div>
  );
}

export default SkillsNav;