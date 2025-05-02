const BASE_URL = "https://www.swapi.tech/api";

export const getPlanets = async () => {
  const response = await fetch(`${BASE_URL}/planets`);
  if (!response.ok) throw new Error("Error fetching planets");
  const data = await response.json();
  return data.results;
};

export const getPlanetById = async (id) => {
  const response = await fetch(`${BASE_URL}/planets/${id}`);
  if (!response.ok) throw new Error("Error fetching planet");
  const data = await response.json();
  return data.result;
};

export const getCharacters = async () => {
  const response = await fetch(`${BASE_URL}/people`);
  if (!response.ok) throw new Error("Error fetching characters");
  const data = await response.json();
  return data.results;
};

export const getCharacterById = async (id) => {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  if (!response.ok) throw new Error("Error fetching character");
  const data = await response.json();
  return data.result;
};
