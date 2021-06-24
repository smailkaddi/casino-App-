import React from "react";

function Scorebox(props) {
    return (
        <div>
            <div className="scorebox">
            <div className="scorebox__title">Score</div>
            <div className="scorebox__score">{props.score}</div>
             </div>
             <div className="scorebox1">
            <div className="scorebox__title">Score</div>
            <div className="scorebox__score">{props.score}</div>
             </div>

        </div>
      
    )
}

export default Scorebox;