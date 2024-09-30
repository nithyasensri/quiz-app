

import React from "react";

export const Answer = ({ answer,selectOption }) => {
    return (<div className="answer-list">
        <div onClick={()=>selectOption(answer)}>
        <input type="radio" id="html" name="fav_language" value="HTML"/>{answer}
        </div>
    </div>)
}