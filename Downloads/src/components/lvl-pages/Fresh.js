import { CardList } from '../card/CardList';
import { useFetchDigimon } from '../../hooks/useFetchDigimon';

export const Fresh = () => {

    const { data:digimons, loading } = useFetchDigimon( 'fresh' );

    return (
        <>
            <h1> Fresh </h1>
            <hr />
            { loading ? <p> Loding... </p> : <CardList digimons={ digimons } /> }
        </>
    )
}
