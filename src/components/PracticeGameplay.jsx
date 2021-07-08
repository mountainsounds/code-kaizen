import React, { useState, useEffect } from 'react';
import clsx from 'clsx';


export default function PracticeGameplay(props) {
  let {time, setTime, timer, score, setScore, gameStarted, setGameStarted, isPractice, skillArr, startTimer} = props;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(skillArr[currentWordIndex])
  const [input, setInput] = useState('');

  // const timer = React.useRef();
  useEffect(() => startTimer(), []);

  if (time < 1){
    resetGame();
    setGameStarted(false);
  }

  function resetGame() {
    clearInterval(timer.current);
    setGameStarted(false);
    setTime(10);
    setScore(0);
  }

  let handleResetButtonClick = () => resetGame();

  let getNextWord = () => {
    document.querySelector('input').classList.remove('correct');
    setCurrentWordIndex(currentWordIndex + 1);
    setCurrentWord(skillArr[currentWordIndex]);
    setInput('');
    setScore(score + 1);
    startTimer();
  }

  let handleInputChange = (userAnswer) => {
    setInput(userAnswer.value);
    if (userAnswer.value === currentWord.command) {
      userAnswer.classList.add('correct');
      setTimeout(getNextWord, 500);
    }
  }

  let resetButton = <button id="word" onClick = {handleResetButtonClick}> Reset</button>


    return (
      <div>
        {resetButton}
        <p>{currentWord.description}</p>
        <input value={input} onChange={e => handleInputChange(e.target)}
          type="text"
          id="text"
          autoComplete="off"
          placeholder={isPractice ? 'Answer...' : currentWord.command }
          autoFocus
        />
      </div>
    )
}