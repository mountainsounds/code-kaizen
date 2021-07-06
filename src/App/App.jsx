import React from 'react';
import SkillMenu from '../components/SkillMenu.jsx';
import TestTyper from '../components/TestTyper.jsx';
import DifficultyPicker from '../components/DifficultyPicker.jsx';

export default function App () {
  return (
    <>
      <nav className='nav-container'>
          <h1 className="active">Code Kaizen</h1>
      </nav>
      <main className='app-container'>
        <SkillMenu />
        < TestTyper />
        <DifficultyPicker />
      </main>
    </>
  )
}