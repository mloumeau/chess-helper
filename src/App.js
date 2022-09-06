import { Chessboard } from 'react-chessboard';
import React, { useEffect, useState} from 'react'
import randomSquareGenerator from './RandomSquareGenerator';
import randomPositionGenerator from './RandomPositionGenerator';
import CountdownTimer from './CountdownTimer';

export default function App() {

  const [chessOrientation, setChessOrientation] = useState('white')
  const [randomSquare, setRandomSquare] = useState(randomSquareGenerator())
  const [selectedSquare, setSelectedSquare] = useState()
  const [numberCorrect, setNumberCorrect] = useState(0)
  const [randomPosition, setRandomPosition] = useState()
  const [showTimer, setShowTimer] = useState(false)


  useEffect(() => {
    setRandomPosition(randomPositionGenerator())
  }, [])

  function onSquareClick(square) {
    setSelectedSquare(square)
  }

  function correctAnswer() {
    if (randomSquare === selectedSquare) {
      setRandomSquare(randomSquareGenerator())
      setSelectedSquare('')
      setNumberCorrect((e) => e + 1)
      setRandomPosition(randomPositionGenerator())
    }
  }

  function handleRandomSquare() {
    setRandomSquare(randomSquareGenerator())
    setSelectedSquare('')
  }

  function handleFlipBoard() {
    chessOrientation === 'white' ? setChessOrientation('black') : setChessOrientation('white')
  }

  function handleStartGame()
  {
    showTimer === false ? 
    setShowTimer(true) : 
    setShowTimer(false)
  }

  function handleNewPositionButton() {
    setRandomPosition(randomPositionGenerator())
  }

  function getCssClass() {
    if (randomSquare === selectedSquare) {
      return 'correct-answer'
    }
    return 'display-square-selection'
  }

  setTimeout(correctAnswer, 400);

  return (
    <div className='bg'>
      <div className='number-correct'>
        {numberCorrect}
      </div>
      <div className="timer">
      {showTimer === true ?
              <CountdownTimer
                initialSeconds={10}
               /> :
              null
      }
      </div>
      <Chessboard
        id="chess-board"
        onSquareClick={onSquareClick}
        boardOrientation={chessOrientation}
        showBoardNotation={false}
        position = {randomPosition}
        // position={{ e3: 'wK', e4: 'wP', d5: 'bP', d6: 'bK' }}
      />
      <button className='btn'
              onClick={handleStartGame}>
                {showTimer === true ? "End Game" : "Start Game"}
      </button>
      <button className='btn'
              onClick={handleRandomSquare}>
                New Square
      </button>
      <button className='btn'
              onClick={handleNewPositionButton}>
                New Position
      </button>
      <button className='btn'
              onClick={handleFlipBoard}>
                Flip Board
      </button>
      <div className={getCssClass()}>Find {randomSquare}!</div>
      <div className={getCssClass()}>{selectedSquare}</div>
    </div>
  );
}