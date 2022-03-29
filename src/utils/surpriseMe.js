const surpriseMe = async (type) => {
  const response = fetch({
    foods: 'https://www.themealdb.com/api/json/v1/1/random.php',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  }[type]);

  const result = await response.json();

  return result.meals[0].idMeal || result.drinks[0].idDrink;
};

export default surpriseMe;
