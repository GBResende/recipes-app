import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Button, ProgressBar } from 'react-bootstrap';
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

const getLocalStorage = (id, wichIngredient) => {
  let ingredientsByLocal = JSON
    .parse(localStorage.getItem('inProgressRecipes') || '[]');
  if (!Object.keys(ingredientsByLocal).length) {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({ [wichIngredient]: { [id]: [] } }),
    );
    ingredientsByLocal = JSON
      .parse(localStorage.getItem('inProgressRecipes') || '[]');
  }
  return ingredientsByLocal;
};

// const getProgressInPercent = (total, done) => {

// }

const InProgressRecipes = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [useIngredient, setUseIngredient] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);
  const [percent, setPercent] = useState('0');
  const [ingredientsKeys, setIngredientsKeys] = useState([]);
  const { location: { pathname } } = useHistory();
  const isFoodLocation = pathname.includes('food');
  const wichIngredient = isFoodLocation ? 'meals' : 'cocktails';
  const ingredientType = isFoodLocation ? 'meals' : 'drinks';
  const stringUrl = isFoodLocation
    ? 'themealdb'
    : 'thecocktaildb';

  const updateProgress = () => {
    const total = Object.keys(getIngredientsAndMeasures(recipe)).length;
    const done = useIngredient.length;
    setPercent((100 / (total / done)).toFixed(2));
    console.log(done, total);
  };

  useEffect(() => {
    updateProgress();
    setIngredientsKeys(getIngredientsAndMeasures(recipe));
    console.log(ingredientsKeys);
  }, [useIngredient]);

  useEffect(() => {
    const ingredientsByLocal = getLocalStorage(id, wichIngredient);
    const url = `https://www.${stringUrl}.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipe({ ...data[ingredientType][0] });
      });
    setUseIngredient(ingredientsByLocal[wichIngredient][id]);
  }, []);

  const handleCheck = ({ target: { name, checked } }) => {
    setDisabledButton(useIngredient.length + 1
      === Object.keys(getIngredientsAndMeasures(recipe)).length);
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
      <ProgressBar className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={ { width: `${percent}%` } }
        >
          { `${percent}%`}

        </div>
      </ProgressBar>
      <div>
        <h3>Ingredients</h3>
        {
          getIngredientsAndMeasures(recipe).map(({ ingredient, measure }, index) => (
            <ul key={ ingredient }>
              <label
                htmlFor={ ingredient }
                data-testid={ `${index}-ingredient-step` }
              >
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
        <p data-testid="instructions">
          {strInstructions}
        </p>
      </div>
      <Link to="/done-recipes">
        <Button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ !disabledButton }
        >
          Finish Recipe
        </Button>
      </Link>
    </>
  );
};
export default InProgressRecipes;
