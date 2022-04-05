// const searchByIngredient = `https://www.${typeAPI}.com/api/json/v1/1/filter.php?i=${ingrediente}`;
// const searchByName = `https://www.${typeAPI}.com/api/json/v1/1/search.php?s=${nome}`;
// const searchByFirstLetter = `https://www.${typeAPI}.com/api/json/v1/1/search.php?f=${letra}`;

async function fetchSearch(typeAPI, typeSearch, value, wichIngredient) {
  const indexSlice = 12;
  console.log('typeAPI', typeAPI);
  console.log('wichIng', wichIngredient);
  const url = () => {
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gg
    switch (typeSearch) {
    case 'ingredient':
      return `https://www.${typeAPI}.com/api/json/v1/1/filter.php?i=${value}`;
    case 'name':
      return `https://www.${typeAPI}.com/api/json/v1/1/search.php?s=${value}`;
    case 'first-letter':
      return `https://www.${typeAPI}.com/api/json/v1/1/search.php?f=${value}`;
    default:
      break;
    }
  };
  const response = await fetch(url());
  const result = await response.json();
  return result[wichIngredient] && result[wichIngredient].slice(0, indexSlice);
}

export default fetchSearch;
