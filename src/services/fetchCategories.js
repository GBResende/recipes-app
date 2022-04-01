async function fetchCategories(type, url) {
  const indexSlice = 5;
  const response = await fetch(url);
  const result = await response.json();
  return type ? result[type].slice(0, indexSlice) : result;
}

async function fetchOneCategory(type, category) {
  const indexSlice = 12;
  const url = `https://www.${type === 'meals'
    ? 'themealdb'
    : 'thecocktaildb'
  }.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const result = await response.json();
  return result[type].slice(0, indexSlice);
}

export {
  fetchCategories,
  fetchOneCategory,
};
