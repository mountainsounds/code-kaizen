import React from 'react';

export default function SkillMenu() {
  return (
    <div className='skillMenu'>
        <div className='header'>
            <p>Choose a skill to learn!</p>
        </div>

        <ul className='skillMenu-list'>
          <li className='skillMenu-list-item'>
            <span>Command Line</span>
          </li>
          <li className='skillMenu-list-item active'>
            <span>VS Code</span>
          </li>
          <li className='skillMenu-list-item'>
            <span>Git</span>
          </li>
        </ul>

    </div>
  )
}
