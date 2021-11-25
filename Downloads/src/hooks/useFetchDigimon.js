import { useState, useEffect } from 'react';
import { getFetchDigimon } from '../api/getFetchDigimon';

export const useFetchDigimon = ( lvl ) => {
    const [ state, setState ] = useState({
        data: null,
        loading: true,
    });
    useEffect(
        () => {
            getFetchDigimon( lvl )
                .then( digimons => {
                    setState({
                        data: digimons,
                        loading: false,
                    });
                });
    }, [ lvl ]);

    return state;
};
