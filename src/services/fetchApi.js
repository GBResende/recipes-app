async function fetchAPI() {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const result = await data.json();
  return result;
}

export default fetchAPI;
