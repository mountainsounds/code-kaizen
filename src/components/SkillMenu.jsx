import React, { useState } from 'react';
import clsx from 'clsx';

export default function SkillMenu() {
  const [currentSkill, setCurrentSkill] = useState('cmdLine');
  let cmdClsx = clsx('skillMenu-list-item', currentSkill === 'cmdLine' && 'active');
  let vsCodeClsx = clsx('skillMenu-list-item', currentSkill === 'vsCode' && 'active');
  let gitClsx = clsx('skillMenu-list-item', currentSkill === 'git' && 'active');

  let handleSkillChange = (newSkill) => {
      if (newSkill === currentSkill) return;
      setCurrentSkill(newSkill);
  }

  return (
    <div className='skillMenu'>
        <div className='header'>
            <h3>Skills</h3>
        </div>

        <ul className='skillMenu-list'>
          <li onClick={() => handleSkillChange('cmdLine')} className={cmdClsx}>
            <span>Command Line</span>
          </li>
          <li onClick={() => handleSkillChange('vsCode')} className={vsCodeClsx}>
            <span>VS Code</span>
          </li>
          <li onClick={() => handleSkillChange('git')} className={gitClsx}>
            <span>Git</span>
          </li>
        </ul>

    </div>
  )
}
