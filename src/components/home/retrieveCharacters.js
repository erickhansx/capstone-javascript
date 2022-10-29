const path = 'https://www.breakingbadapi.com/api/characters?limit=12&offset=0';

const retrieveCharacters = async () => {
  const retrieve = await fetch(path);
  const data = await retrieve.json();
  return data;
};

export default retrieveCharacters;
