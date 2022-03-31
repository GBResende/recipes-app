const fetchSearch = (url) => fetch(url)
  .then((response) => response.json())
  .ther((data) => data)
  .catch((err) => console.err(err));

export default fetchSearch;
