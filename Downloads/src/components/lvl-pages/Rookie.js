
import { CardList } from '../card/CardList';
import { useFetchDigimon } from '../../hooks/useFetchDigimon';

export const Rookie = () => {

    const { data:digimons, loading } = useFetchDigimon( 'rookie' );

    return (
        <>
            <h1> Rookie </h1>
            <hr />
            { loading ? <p> Loding... </p> : <CardList digimons={ digimons } /> }
        </>
    )
}

