import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import { setProgressRecipeToLocalStorage } from '../services/localStorage';

const getIngredientsAndMeasures = (obj) => {
  const ingredients = Object
    .keys(obj)
    .filter((ingItem) => ingItem.includes('Ingredient') && obj[ingItem]);
  const measures = Object
    .keys(obj)
    .filter((ingMeasure) => ingMeasure.includes('Measure') && obj[ingMeasure]);
  return ingredients.reduce((acc, ingredient, i) => (obj[ingredient].length
    ? (acc
      .push({
        ingredient: obj[ingredient],
        measure: obj[measures[i]],
      }) && acc)
    : acc), []);
};

const InProgressRecipes = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [useIngredient, setUseIngredient] = useState([]);
  const { location: { pathname } } = useHistory();
  const isFoodLocation = pathname.includes('food');
  const wichIngredient = isFoodLocation ? 'meals' : 'cocktails';
  const ingredientType = isFoodLocation ? 'meals' : 'drinks';
  const stringUrl = isFoodLocation
    ? 'themealdb'
    : 'thecocktaildb';
  console.log(useIngredient);

  useEffect(() => {
    const ingredientsByLocal = JSON
      .parse(localStorage.getItem('inProgressRecipes') || '[]');
    const url = `https://www.${stringUrl}.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipe({ ...data[ingredientType][0] });
      });
    setUseIngredient(ingredientsByLocal[wichIngredient][id]);
  }, []);

  const handleCheck = ({ target: { name, checked } }) => {
    const ingredientsByLocal = JSON
      .parse(localStorage.getItem('inProgressRecipes') || '[]');
    setUseIngredient(checked
      ? [...ingredientsByLocal[wichIngredient][id], name]
      : ingredientsByLocal[wichIngredient][id].filter((prev) => prev !== name));
    setProgressRecipeToLocalStorage(
      id, (checked
        ? [...ingredientsByLocal[wichIngredient][id], name]
        : ingredientsByLocal[wichIngredient][id].filter((prev) => prev !== name)),
    );
  };

  const {
    strArea,
    strAlcoholic,
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
  } = recipe;
  return (
    <>
      {
        recipe
        && (
          <ProductHeader
            nationality={ strArea || '' }
            productID={ id }
            name={ strDrink || strMeal }
            image={ strDrinkThumb || strMealThumb }
            category={ strCategory }
            alcoholic={ strAlcoholic || '' }
            linkRecipe={ window.location.href }
          />
        )
      }
      <div>
        <h3>Ingredients</h3>
        {
          getIngredientsAndMeasures(recipe).map(({ ingredient, measure }) => (
            <ul key={ ingredient }>
              <label htmlFor={ ingredient }>
                <input
                  checked={ useIngredient.some((ing) => ing === ingredient) }
                  name={ ingredient }
                  type="checkbox"
                  value={ `${ingredient} ${measure}` }
                  onChange={ handleCheck }
                />
                {`${ingredient} ${measure}`}
              </label>
            </ul>
          ))
        }
      </div>
      <div>
        <h3>Instructions</h3>
        {strInstructions}
      </div>
    </>
  );
};
export default InProgressRecipes;
