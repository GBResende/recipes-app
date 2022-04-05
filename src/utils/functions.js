const url = async (type, id) => {
  const response = fetch({
    foods: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    drinks: `https://www.thecocktaildb.comapi/json/v1/1/lookup.php?i=${id}`,
  }[type]);

  const result = await response.json();

  return result.meals[0] || result.drinks[0];
};

const type = () => window.location.pathname.split('/')[1];

export { url, type };
