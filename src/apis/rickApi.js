let allCharacters = Array.from(Array(51).keys());
// console.log(allCharacters);
allCharacters.shift();
// console.log(allCharacters);

// Retrieves data from RESTapi at rickandmortyapi.com
export async function getAllCharacters() {
  try {
    const all = await fetch(
      `https://rickandmortyapi.com/api/character/${allCharacters}`
    );

    const res = await all.json();
    //console.log(res);

    return res;
  } catch (e) {
    console.log(e);
  }
}
