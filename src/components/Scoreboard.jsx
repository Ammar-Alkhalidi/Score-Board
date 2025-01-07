import React, { useContext } from 'react';
/* import { ScoreContext } from '../contexts/ScoreContext'; */
import { ScoreContext } from "../contexts/ScoreContext";

import Infoboard from './Infoboard';

const Scoreboard = () => {
    const { score, plusScore, minusScore } = useContext(ScoreContext);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Score Board</h1>
            <h2>Your Current Score is {score}</h2>
            <button onClick={plusScore}>+</button>
            <button onClick={minusScore}>-</button>
            <Infoboard />
        </div>
    );
};

export default Scoreboard;
