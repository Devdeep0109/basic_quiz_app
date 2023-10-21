import React, { useState } from 'react';
import {QuizData} from "../data/QuizData";
import "../App.css";
import QuizResult from "./QuizResult";

export default function Quiz() {

  const [currrentQuestion , setCurrentQuestion] = useState(0);
  const [score ,setScore] = useState(0);
  const [clickedOption , setClickedOption] = useState(0);
  const [showResult , setShowResult] = useState(false);

  const changeQuestion = ()=>{
    
    updateScore();
    if(currrentQuestion < QuizData.length -1){
      
      setCurrentQuestion(currrentQuestion+1);
      setClickedOption(0);
    }
    else{
      setShowResult(true);
    }
  }

  // setting score
  const updateScore = () => {
    if(clickedOption === QuizData[currrentQuestion].answer){
      setScore(score+1);
    }
  }
// resetting to first page
  const resetAll =() =>{
    setClickedOption(0);
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  }
  return (

    <div>
      <h1>Quiz App</h1>
      <div className="container">
        {/* showing result if all question finishes */}
        {showResult ? (
          <QuizResult score = {score} totalScore = {QuizData.length}  tryAgain ={resetAll}/> 
          ):(
          <>
        {/* Question wala div */}
        <div className="question">
            <span id ="question-number">{currrentQuestion + 1}.</span>
            <span id ="question-txt">{QuizData[currrentQuestion].question}</span>
        </div>
        {/* option wala div */}
        <div className="option-container">
         {QuizData[currrentQuestion].options.map( (option , i) =>{
            return(
              <button 
              // className="option-btn"
              className={ `option-btn ${clickedOption === i+1 ? "checked" :null}`}
              key={i} 
              onClick={ () => {setClickedOption(i +1)}}>
                {option}
              </button>
            )
         })}
        </div>
        {/* Final submit wala button */}
        <input type="button" value ="Next" id ="next-button" onClick={changeQuestion} />
        </> )}
      </div>
    </div>
  )
}
