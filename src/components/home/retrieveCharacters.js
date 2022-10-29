// const homepage = document.querySelector('.homepage');
const path = 'https://www.breakingbadapi.com/api/characters?limit=100&offset=0';
// const appId = 'wHDqf2FyYMmzmK7MMxf9';
// const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

const retrieveCharacters = async () => {
  const retrieve = await fetch(path);
  const data = await retrieve.json();
  return data;
};

export default retrieveCharacters;
