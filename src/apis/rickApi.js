// Setting a range of characters to retrieve and shifting the first index (0)
let allCharacters = Array.from(Array(101).keys());
allCharacters.shift();

// Retrieves data from RESTapi at rickandmortyapi.com
export async function getAllCharacters() {
  try {
    const all = await fetch(
      `https://rickandmortyapi.com/api/character/${allCharacters}`
    );

    const res = await all.json();

    return res;
  } catch (e) {
    console.log(e);
  }
}
