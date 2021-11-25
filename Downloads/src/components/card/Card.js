import { getRandomPrice } from '../../helpers/getRandomPrice';

// create a functional component of a card with the following properties: name, img, and level
export const Card = ({ name, img, level }) => {
    const price = getRandomPrice( 130, 1000 );
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>Level: {level}</p>
      </div>
      <div className="card">
        <p>Price: {price}</p>
      </div>
    </div>
  );
};
