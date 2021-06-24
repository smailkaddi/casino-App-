import React from "react";
import Scorebox from "./Scorebox";

function Header(props) {
    return (
        <header>
            <h1 className="header__title">
                <span>1:00</span>
                <span className="header2">1:00</span>

            </h1>
            <Scorebox score={props.score}/>
        </header>
    )
}

export default Header;