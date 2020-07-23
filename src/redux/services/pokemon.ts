export function fetchPokemonService(page?: number, limit?: number) {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        let pokemonsArray = results.map((result) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(pokemonsArray);
      })
      .then((data) => {
        resolve(data);
        return data;
      })
      .catch((error) => reject(error));
  });
}
