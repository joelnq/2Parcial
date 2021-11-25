import {
    Routes,
    Route,
} from 'react-router-dom';

import { Champion } from '../components/lvl-pages/Champion';
import { Fresh } from '../components/lvl-pages/Fresh';
import { Rookie } from '../components/lvl-pages/Rookie';
import { Ultimate } from '../components/lvl-pages/Ultimate';

import { Navbar } from '../components/Navbar';

export const LvlRouter = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="champion" element={ <Champion /> } />
            <Route path="fresh" element={ <Fresh /> } />
            <Route path="rookie" element={ <Rookie /> } />
            <Route path="ultimate" element={ <Ultimate /> } />
            <Route path="/" element={ <Champion /> } />
        </Routes>
        </>
    );
};
