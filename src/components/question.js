
import React from "react";
import { useContext } from "react";
import { quizContext } from "../context/QuizContext";
import { Answer } from "./answer";



export const Question = () => {

    const [quizState, dispatch] = useContext(quizContext)
    const currentIndex = quizState.data[quizState.index]
    console.log(quizState.answer)
    return (
        <div className="main">
            <div className="questions">
                <p><span>{quizState.index + 1}</span> {currentIndex.question}</p>
            </div>
            <div className="answer-div">
                {quizState.answer.map((value, index) =>
                    <Answer answer={value} key={index}
                        selectOption={(answer) => dispatch({ type: "Select-Option", payload: answer })}
                    />)}
            </div>
            <button onClick={() => dispatch({ type: "Next" })}>Next</button>
        </div>
    )
}