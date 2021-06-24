import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgTriangle from '../images/bg-triangle.svg';
import iconcard from "../images/icon-card.svg";
import ASicon from "../images/ASicon.svg";


function Home(props) {

    function playGame(e) {
        props.setPick(e.target.dataset.id);
    }

    return (
        <div className="home">
            <img className="triangle" src={bgTriangle}/>
            <Link to="">
                <div data-id="paper" className="home__item home__paper" style={{backgroundImage: `url(${ASicon})`}} onClick={playGame} />
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__scissors" style={{backgroundImage: `url(${ASicon})`}} onClick={playGame}/>
            </Link>
            
            <Link to="">
                <div data-id="scissors" className="home__item home__card1" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card2" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card3" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card4" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card5" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card6" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card7" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card8" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card9" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            <Link to="">
                <div data-id="scissors" className="home__item home__card10" style={{backgroundImage: `url(${iconcard})`}} onClick={playGame}/>
            </Link>
            
        </div>
    )
}

export default Home;