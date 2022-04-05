import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory /* useLocation */ } from 'react-router-dom';
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

function DetailRecipes() {
  const history = useHistory();
  const productId = history.location.pathname.replace(/[^0-9]/g, '');
  let productURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`;
  if (history.location.pathname.includes('drinks')) {
    productURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`;
  }
  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        if (history.location.pathname.includes('foods')) {
          return setProductData({ ...data.meals[0] });
        }
        setProductData({ ...data.drinks[0] });
      });
  }, [productURL, history.location.pathname]);

  const handleClickStartRecipe = () => {
    setProgressRecipeToLocalStorage(productId);
    history.push(`${history.location.pathname}/in-progress`);
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
        productID={ productId }
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
                <li>{`${ingredient} ${measure || ''}`}</li>
              </ul>
            ),
          )}
        </div>
      </section>
      <section>
        <h3 data-testid="instructions">Instructions</h3>
        <div>{strInstructions}</div>
      </section>
      {strYoutube && (
        <section>
          <h3>Vídeo</h3>
          <iframe
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
        <div data-testid={ `${1}-recomendation-card` }>
          aqui vão 6 recomendações
        </div>
      </section>
      <Button
        onClick={ handleClickStartRecipe }
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </Button>
    </div>
  );
}

export default DetailRecipes;
