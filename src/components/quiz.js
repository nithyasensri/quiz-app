

import React from "react";
import { Question } from "./question";

import { useContext } from "react";
import { quizContext } from '../context/QuizContext'

export const Quiz = () => {

    const [quizState, dispatch] = useContext(quizContext)
    console.log(quizState.showResult)
    return (<div>

        {quizState.showResult && <div className="score">
            <p>score</p>
            <button onClick={()=>dispatch({type:"Restart"})}>Restart</button>
        </div>}


        {!quizState.showResult &&
            <div className="Questions-div">
                <div className="Questions-list">
                    <h4>Questions  {quizState.index + 1}/{quizState.data.length}</h4>
                </div>
                <div className="questions-div">
                    <Question />
                </div>
            </div>
        }


    </div>)
}