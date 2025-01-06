import React, { useState } from 'react'
import { data } from '../database/data'

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('');
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);
    const correctAnswer = ["Option1", "Option1", "Option1", "Option1", "Option1", "Option1", "Option1", "Option1", "Option1", "Option1", "Option1", "Option1",];
    const handleClick = () => {
        if (index < data.length - 1) {
            if (correctAnswer[index] === option) {
                setScore(score + 1);
            }
            setIndex(index + 1);
            setOption('');
        } else {
            if (correctAnswer[index] === option) {
                setScore(score + 1);
            }
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div>
                <h1>Quiz Finished</h1>
                <h3>Your Score is {score} out of {data.length}</h3>
            </div>
        )
    }

    const handleSelect = (opt) => {
        setOption(opt);
    }
  return (
    <div className='quiz-container'>
         <h1> {data[index].Question}</h1>
        <ul>
            <li className={option === "Option1" ? "selected" : ""} onClick={() => handleSelect("Option1")}>{data[index].Option1}</li>
            <li className={option === "Option2" ? "selected" : ""} onClick={() => handleSelect("Option2")}>{data[index].Option2}</li>
            <li className={option === "Option3" ? "selected" : ""} onClick={() => handleSelect("Option3")}>{data[index].Option3}</li>
            <li className={option === "Option4" ? "selected" : ""} onClick={() => handleSelect("Option4")}>{data[index].Option4}</li>
        </ul>
        <button onClick={handleClick} disabled={!option}>Next</button>
        <p>Question {index} of {data.length}</p>
    </div>
  )
}

export default Quiz