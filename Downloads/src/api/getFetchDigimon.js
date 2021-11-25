
// Create a function that takes a lvl to fetch digimon with link https://digimon-api.herokuapp.com/api/digimon/level/
// and returns an array of digimon names.

export const getFetchDigimon = async ( lvl ) => {
    const response = await fetch(`https://digimon-api.herokuapp.com/api/digimon/level/${ lvl }`);
    const data = await response.json();
    const digimons = data.map( digimon => {
        return ({
            name: digimon.name,
            img: digimon.img,
            level: digimon.level,
        });
    });
    return digimons;
};
