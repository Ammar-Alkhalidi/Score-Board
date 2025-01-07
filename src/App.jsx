import React from 'react';
import { ScoreContextProvider } from './contexts/ScoreContext';
import Scoreboard from './components/Scoreboard';

const App = () => {
    return (
        <ScoreContextProvider>
            <Scoreboard />
        </ScoreContextProvider>
    );
};

export default App;
