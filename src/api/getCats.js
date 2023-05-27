const API_KEY =
  'live_3YlxLGMeU7HgkWzx13WT4OmkwdsPWlL7HFwkGqvs4cQwHtYN2pC69vMrO3HObeQO';

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds`, options).then(response =>
    response.json()
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    options
  ).then(response => response.json());
}
