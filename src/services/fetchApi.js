async function fetchAPI(type, url) {
  const MAGIC_NUMBER = 12;
  const response = await fetch(url);
  const result = await response.json();
  const indexSlice = result[type].length >= MAGIC_NUMBER
    ? MAGIC_NUMBER : result[type].length;
  return type ? result[type].slice(0, indexSlice) : result;
}

export default fetchAPI;
