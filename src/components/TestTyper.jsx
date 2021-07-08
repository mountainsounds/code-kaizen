import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PracticeGameplay from './PracticeGameplay';
import { cmdData } from '../storage/cmdLineData.js';
import { gitData } from '../storage/gitData.js';
import { vsCodeData } from '../storage/vsCodeData.js';

let shuffle = (data) => {
  for (let i = 0; i < data.length; i++) {
    let random = Math.floor(Math.random() * data.length);
    [data[i], data[random]] = [data[random], data[i]];
  }
  return data;
}

let switchDatasets = (skillName, difficulty) => {
  let storage = {
      'Command Line': cmdData,
      'VS Code': vsCodeData,
      'Git': gitData,
  }
  let shuffled = shuffle(storage[skillName][difficulty]);
  return shuffled;
}



export default function TestTyper({currentSkill, currentDifficulty, gameStarted, setGameStarted}) {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [skillArr, setSkillArr] = useState(switchDatasets(currentSkill, currentDifficulty));
  const timer = React.useRef();

  console.log('currentDif: ', currentDifficulty);

  useEffect(() => {
    setSkillArr(switchDatasets(currentSkill, currentDifficulty));
    clearInterval(timer.current);
    setTime(10);
    setScore(0);
  },[currentSkill]);

  /******* Handle Practice / Learn State **********/
  const [isPractice, setIsPractice] = useState(true);
  let clsxPractice = clsx('option', 'option--one', isPractice && 'focus');
  let clsxLearn = clsx('option', 'option--four', !isPractice && 'focus');

  function handlePracticeSwitch(studyType) {
    if (studyType === 'practice' && isPractice === false) setIsPractice(!isPractice);
    if (studyType === 'learn' && isPractice === true) setIsPractice(!isPractice);
  }

  function handleGameStart() {
    setGameStarted(!gameStarted);
  }

  function startTimer() {
    clearInterval(timer.current);
    setTime(10);
    timer.current = setInterval(() => setTime((time) => time - 1), 1000);
  }

  let startButton = <button id="word" onClick={handleGameStart}> Begin</button>;
  let PracticeGamePlay = <PracticeGameplay startTimer={startTimer} timer={timer} isPractice={isPractice} score={score} setScore={setScore} time={time} setTime={setTime} setGameStarted={setGameStarted} gameStarted={gameStarted} skillArr={skillArr} />

  return (
    <main className='mainSection'>
      <header className='practiceStatusContainer'>
          <div className={clsxPractice} tabIndex="0" onClick={() => handlePracticeSwitch('practice')}> Practice </div>
          <div className={clsxLearn} tabIndex="0" onClick={() => handlePracticeSwitch('learn')}> Learn </div>
      </header>

      <div className="test-container">
        <h2> {currentSkill} </h2>

        {gameStarted ? PracticeGamePlay  : <div>{startButton}</div>}

        <p className="time-container">Remaining time: <span id="time">{time}</span></p>
        <p className="score-container"># Correct: <span id="score">{score}</span></p>

        <div id="end-game-container" className="end-game-container"></div>
    </div>
  </main>
  )

}