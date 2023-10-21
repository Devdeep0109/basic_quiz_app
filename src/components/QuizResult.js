import React from 'react';


function QuizResult(props) {
  return (
    <>
    <div className='finalresult'>
      <h2>Your Score : {props.score} </h2><br/>
      <h2>Total Score : {props.totalScore} </h2>
    </div>
    <button id ="next-button" onClick={props.tryAgain}>Try again</button>
    </>
  )
}

export default QuizResult
