import { Card } from './Card';

export const CardList = ({ digimons }) => {

    return (
        <div className="card-list">
        {
            digimons.map( digimon => (
                <Card 
                    key={ digimon.name } 
                    { ...digimon }
                />
            ))
        }
        </div>
    );
};
