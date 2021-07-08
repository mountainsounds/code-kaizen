import React, { useState } from 'react';
import clsx from 'clsx';

export default function SkillMenu({currentSkill, setCurrentSkill, setGameStarted}) {
  let cmdClsx = clsx('skillMenu-list-item', currentSkill === 'Command Line' && 'active');
  let vsCodeClsx = clsx('skillMenu-list-item', currentSkill === 'VS Code' && 'active');
  let gitClsx = clsx('skillMenu-list-item', currentSkill === 'Git' && 'active');

  let handleSkillChange = (newSkill) => {
      if (newSkill === currentSkill) return;
      setGameStarted(false);
      setCurrentSkill(newSkill);
  }

  return (
    <div className='skillMenu'>
        <div className='header'>
            <h3>Skills</h3>
        </div>

        <ul className='skillMenu-list'>
          <li onClick={() => handleSkillChange('Command Line')} className={cmdClsx}>
            <span>Command Line</span>
          </li>
          <li onClick={() => handleSkillChange('VS Code')} className={vsCodeClsx}>
            <span>VS Code</span>
          </li>
          <li onClick={() => handleSkillChange('Git')} className={gitClsx}>
            <span>Git</span>
          </li>
        </ul>

    </div>
  )
}
