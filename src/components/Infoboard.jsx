import React, { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const Infoboard = () => {
    const { score } = useContext(ScoreContext);

    return (
        <h3>
            {score > 100 ? 'Good job!' : "Let's make it over 100!"}
        </h3>
    );
};

export default Infoboard;
