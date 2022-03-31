async function fetchAPI(type, url) {
  const indexSlice = 12;
  const response = await fetch(url);
  const result = await response.json();
  return type ? result[type].slice(0, indexSlice) : result;
}

export default fetchAPI;
