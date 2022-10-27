import { retrieveCharacters } from './retrieveCharacters';
const appId = 'wHDqf2FyYMmzmK7MMxf9';
const idPath = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

export const addCharApi = async () => {
  const charactersInfo = await retrieveCharacters();
  const charactersIds = document.querySelectorAll('.characterDiv');
  console.log(charactersIds);
  try {
    charactersIds.forEach((charactersIds) => {
      console.log(charactersIds);
      const update = {
        item_id: charactersIds.id,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
      };
      fetch(idPath, options);
    });
  } catch {
    console.log('error');
  }
};
