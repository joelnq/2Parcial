import { CardList } from '../card/CardList';
import { useFetchDigimon } from '../../hooks/useFetchDigimon';

export const Champion = () => {

    const { data:digimons, loading } = useFetchDigimon( 'champion' );

    return (
        <>
            <h1> Champion </h1>
            <hr />
            { loading ? <p> Loding... </p> : <CardList digimons={ digimons } /> }
        </>
    )
}
