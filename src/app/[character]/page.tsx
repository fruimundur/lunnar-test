import { FC } from 'react';
import Top from '@/components/detailed-character/top';
import Planets from '@/components/detailed-character/planets';
import Starships from '@/components/detailed-character/starships';

const getCharacters = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
  
    if (!res.ok) {
        throw new Error('Could not fetch character');
    }
  
    return res.json();
}


const getPlanets = async () => {
    const characters = await getCharacters();

    const results = characters.results
    let planets = []

    for (let i = 0; i < results.length; i++) {
        let homeworld = results[i].homeworld
        planets.push(homeworld)
    }

const planetData = []

for (const url of planets) {
    const res = await fetch(url);
  
    if (!res.ok) {
        throw new Error('Could not fetch planets');
    }

    const planet = await res.json();
    planetData.push(planet);
  
    }
    return planetData;
}


const getStarships = async () => {
    const characters = await getCharacters();

    const results = characters.results
    let starships = []

    for (let i = 0; i < results.length; i++) {
        let allproperties = results[i].starships[0]
        starships.push(allproperties)
    }

const filteredStarships = starships.filter((item) => item !== undefined);

const starshipData = []

for (const url of filteredStarships) {
    const res = await fetch(url);
  
    if (!res.ok) {
        throw new Error('Could not fetch starships');
    }

    const starship = await res.json();
    starshipData.push(starship);
  
    }
    return starshipData;
}


interface pageProps{
    params: {character: string}
}


const CharacterPage: FC<pageProps> = async ({params}) => {

    const charactersObject = await getCharacters();
    const characters = charactersObject.results
    const characterName = params.character.replace(/%20/g, ' ')
    const selectedCharacter = characters.filter((item: { name: string; }) =>
        item.name===characterName
    );


    const planetObjects = await getPlanets();

    let planet;
    if (selectedCharacter[0].homeworld === "https://swapi.dev/api/planets/1/") {
        planet = [planetObjects[0]]
    } else if (selectedCharacter[0].homeworld === "https://swapi.dev/api/planets/8/") {
        planet = [planetObjects[2]]
    } else if (selectedCharacter[0].homeworld === "https://swapi.dev/api/planets/2/") {
        planet = [planetObjects[4]]
    } else if (selectedCharacter[0].homeworld === "https://swapi.dev/api/planets/20/") {
        planet = [planetObjects[9]]
    }


    const starshipObjects = await getStarships();

    let unknownStarships = 
        {
            name: "N/A",
            model: "N/A",
            manufacturer: "N/A",
        }
   
    starshipObjects.push(unknownStarships)

    let starship;
    if (selectedCharacter[0].starships[0] === "https://swapi.dev/api/starships/12/") {
        starship = [starshipObjects[0]]
    } else if (selectedCharacter[0].starships[0] === "https://swapi.dev/api/starships/13/") {
        starship = [starshipObjects[1]]
    } else if (selectedCharacter[0].starships[0] === "https://swapi.dev/api/starships/48/") {
        starship = [starshipObjects[3]]
    } else {
        starship = [starshipObjects[4]]
    } 

    interface Character {
        name: string;
        gender: string;
        birth_year: string;
    }

    return(
        <div>
            {selectedCharacter.map(({name, gender, birth_year} : Character) => (
                <Top name={name} gender={gender} birthyear={birth_year} />
            ))}
            {planet.map(({name, rotation_period, population}) => (
                <Planets name={name} rotation={rotation_period} population={population} />
            ))}
            {starship.map(({name, model, manufacturer}) => (
                <Starships name={name} model={model} manufacturer={manufacturer} />
            ))}
        </div>
    )
}

export default CharacterPage