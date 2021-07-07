import React, { useState } from 'react';
import clsx from 'clsx';



export default function TestTyper() {
  const [isPractice, setIsPractice] = useState(true);

  let clsxPractice = clsx('option', 'option--one', isPractice && 'focus');
  let clsxLearn = clsx('option', 'option--four', !isPractice && 'focus');

  function handlePracticeSwitch(studyType) {
    if (studyType === 'practice' && isPractice === false) setIsPractice(!isPractice);
    if (studyType === 'learn' && isPractice === true) setIsPractice(!isPractice);
  }

  return (
    <main className='mainSection'>
      <header className='practiceStatusContainer'>
          <div className={clsxPractice} tabIndex="0" onClick={() => handlePracticeSwitch('practice')}> Practice </div>
          <div className={clsxLearn} tabIndex="0" onClick={() => handlePracticeSwitch('learn')}> Learn </div>
      </header>

      <div className="test-container">
        <h2> VS Code </h2>

        {/* <h3 id="word">Begin</h3> */}
        <button id="word">Begin</button>

        <input
          type="text"
          id="text"
          autoComplete="off"
          placeholder="Answer..."
          autoFocus
        />
        <p className="time-container">Remaining time: <span id="time">10s</span></p>
        <p className="score-container"># Correct: <span id="score">0</span></p>

        <div id="end-game-container" className="end-game-container"></div>
    </div>
  </main>
  )
}