import { useEffect, useState } from 'react';
import Character from './Character';
import NavPage from './NavPage';
import Spinner from './Spinner';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://rickandmortyapi.com/api/character?page=${page}`;

      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    };

    consultarAPI();
  }, [page]);


  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
