import CharacterBox from "../components/character-box";
import Link from "next/link";

const getCharacters = async () => {
  const res = await fetch('https://swapi.dev/api/people/');

  if (!res.ok) {
      throw new Error('Could not fetch character');
  }

  return res.json();
}

interface Character {
  name: string;
  gender: string;
  birth_year: string;
}

const Home = async () => {
  const characters: { results: Character[] } = await getCharacters();
 
  return (
    <div className="text-white mb-28">
      <h1 className="font-bold text-base ml-8 mt-4 mb-6">Characters in StarWars</h1>
      <div>
      {characters.results.map(({name, gender, birth_year}) => (
        <Link href={`/${name}`}><CharacterBox name={name} gender={gender} birthyear={birth_year}/></Link>
      ))}
      </div>
    </div>
  )
}

export default Home