
import { CardList } from '../card/CardList';
import { useFetchDigimon } from '../../hooks/useFetchDigimon';

export const Ultimate = () => {

    const { data:digimons, loading } = useFetchDigimon( 'ultimate' );

    return (
        <>
            <h1> Ultimate </h1>
            <hr />
            { loading ? <p> Loding... </p> : <CardList digimons={ digimons } /> }
        </>
    )
}


