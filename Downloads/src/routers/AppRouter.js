import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Home } from '../components/Home';
import { LvlRouter } from './LvlRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="lvl/*" element={ <LvlRouter /> } />
                <Route path="/" element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    );
} 
