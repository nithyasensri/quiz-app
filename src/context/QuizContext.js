

import React from "react";
import data from "../data.json";
import { shuffleAnswer } from '../helper'



import { createContext } from "react";
import { useReducer } from "react";

export const quizContext = createContext();

const initialState = {
    data,
    index: 0,
    answer: shuffleAnswer(data[0]),
    Answercount: 0,

}



const reducer = (state, action) => {

    switch (action.type) {

        case "Next":
            const showResult = state.index === state.data.length - 1
            const index = showResult ? state.index : state.index + 1
            const answer = showResult ? [] : shuffleAnswer(state.data[index])
            return {
                ...state,
                index,
                answer,
                showResult
            }

        case "Select-Option":
            const count = action.payload === state.data[state.index].correctAnswer
                ? state.count + 1 : state.count

                console.log(count)
            return {
                ...state,
                currentAnswer: action.payload,
                count
            }



        case "Restart":
            return initialState
        default:
            // console.log(state)
            return state
    }
}


export const MainContext = ({ children }) => {

    const value = useReducer(reducer, initialState)

    return <quizContext.Provider value={value}>
        {children}
    </quizContext.Provider>

}
