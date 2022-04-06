import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useHistory /* useLocation */ } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import { setProgressRecipeToLocalStorage } from '../services/localStorage';

const getIngredientsAndMeasures = (obj) => {
  const ingredients = Object.keys(obj).filter(
    (ingItem) => ingItem.includes('Ingredient') && obj[ingItem],
  );
  const measures = Object.keys(obj).filter(
    (ingMeasure) => ingMeasure.includes('Measure') && obj[ingMeasure],
  );
  return ingredients.reduce((acc, ingredient, i) => {
    console.log(obj[ingredient]);
    return obj[ingredient].length
      ? acc.push({
        ingredient: obj[ingredient],
        measure: obj[measures[i]],
      }) && acc
      : acc;
  }, []);
};

const getRecipesFromStorage = (id, wichIngredient) => {
  const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const recipesIdInProgress = recipes
    ? Object.keys(recipes[wichIngredient])
    : [];
  return recipesIdInProgress.some((recipeId) => recipeId === id);
};

const getDoneRecipesFromStorage = (id) => {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes') || '[]');
  return recipesDone.some((recipe) => recipe.id === id);
};

function DetailRecipes() {
  const { location: { pathname }, push } = useHistory();
  const isFoodLocation = pathname.includes('food');
  const wichIngredient = isFoodLocation ? 'meals' : 'cocktails';
  const { id } = useParams();
  let productURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  if (pathname.includes('drinks')) {
    productURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  }
  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        if (pathname.includes('foods')) {
          return setProductData({ ...data.meals[0] });
        }
        setProductData({ ...data.drinks[0] });
      });
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }, [productURL, pathname]);

  const handleClickStartRecipe = () => {
    setProgressRecipeToLocalStorage(id);
    push(`${pathname}/in-progress`);
  };

  const {
    strArea,
    strAlcoholic,
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    strYoutube,
    strMeal,
    strMealThumb,
  } = productData;
  return (
    <div>
      <ProductHeader
        nationality={ strArea || '' }
        productID={ id }
        name={ strDrink || strMeal }
        image={ strDrinkThumb || strMealThumb }
        category={ strCategory }
        alcoholic={ strAlcoholic || '' }
        linkRecipe={ window.location.href }
      />
      <section>
        <h3>Ingredients</h3>
        <div data-testid={ `${1}-ingredient-name-and-measure` }>
          {getIngredientsAndMeasures(productData).map(
            ({ ingredient, measure }, index) => (
              <ul key={ index }>
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {`${ingredient} ${measure || ''}`}
                </li>
              </ul>
            ),
          )}
        </div>
      </section>
      <section>
        <h3>Instructions</h3>
        <div data-testid="instructions">{strInstructions}</div>
      </section>
      {strYoutube && (
        <section>
          <h3>Vídeo</h3>
          <iframe
            data-testid="video"
            width="560"
            height="315"
            src={ strYoutube.replace('watch?v=', 'embed/') }
            title="YouTube video player"
            frameBorder="0"
            allow={
              'accelerometer; autoplay; clipboard-write;'
              + 'encrypted-media; gyroscope; picture-in-picture'
            }
            allowFullScreen
          />
        </section>
      )}
      <section>
        <h3>Recommended</h3>
        <div data-testid="0-recomendation-card">
          aqui vão 6 recomendações
        </div>
      </section>
      { !getDoneRecipesFromStorage(id)
      && (
        <Button
          onClick={ handleClickStartRecipe }
          data-testid="start-recipe-btn"
          type="button"
          style={ { position: 'fixed', bottom: '0px' } }
        >
          {
            getRecipesFromStorage(id, wichIngredient)
              ? 'Continue Recipe'
              : 'Start Recipe'
          }
        </Button>
      )}
    </div>
  );
}

export default DetailRecipes;
