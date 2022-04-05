export function setProgressRecipeToLocalStorage(id, doneIngredients = []) {
  const pathName = window.location.href;
  const productType = pathName.includes('foods') ? 'meals' : 'cocktails';

  const previousLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes') || '{}');

  const previousMeals = previousLocalStorage.meals || null;
  const previousCocktails = previousLocalStorage.cocktails || null;
  const objReceived = {
    cocktails: {
      ...previousCocktails,
      ...(productType === 'cocktails' && { [id]: [...doneIngredients] }),
    },
    meals: {
      ...previousMeals,
      ...(productType === 'meals' && { [id]: [...doneIngredients] }),
    },
  };
  localStorage
    .setItem('inProgressRecipes', JSON
      .stringify(objReceived));
}

export function setFavoriteToLocalStorage(obj, flag) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(favorites);
  const newFavorites = !favorites ? [obj] : [...favorites, obj];
  const filteredFavorites = flag
    ? newFavorites.filter((favorite) => favorite.id !== obj.id) : newFavorites;

  localStorage.setItem('favoriteRecipes', JSON.stringify(filteredFavorites));
}
