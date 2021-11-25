import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1> Home </h1>
            <hr />
            <button onClick={() => navigate('/lvl/champion')}> Champion </button>
            <button onClick={() => navigate('/lvl/rookie')}> Rookie </button>
            <button onClick={() => navigate('/lvl/fresh')}> Fresh </button>
            <button onClick={() => navigate('/lvl/ultimate')}> Ultimate </button>
        </>
    )
}
