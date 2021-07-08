import React, { useState } from 'react';
import SkillMenu from '../components/SkillMenu.jsx';
import TestTyper from '../components/TestTyper.jsx';
import DifficultyPicker from '../components/DifficultyPicker.jsx';

export default function App () {
  const [currentSkill, setCurrentSkill] = useState('Command Line');
  const [currentDifficulty, setCurrentDifficulty] = useState('novice');
    const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      <nav className='nav-container'>
          <h1 className="active">Code Kaizen</h1>
      </nav>
      <main className='app-container'>
        <SkillMenu setGameStarted={setGameStarted} currentSkill={currentSkill} setCurrentSkill={setCurrentSkill} />
        < TestTyper gameStarted={gameStarted} setGameStarted={setGameStarted} currentSkill={currentSkill} currentDifficulty={currentDifficulty} />
        <DifficultyPicker currentDifficulty={currentDifficulty} setCurrentDifficulty={setCurrentDifficulty} />
      </main>
    </>
  )
}