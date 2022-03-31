import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import Footer from '../components/Footer';

function DetailRecipes() {
  const { location: { pathname } } = useHistory();
  const productId = pathname.replace(/[^0-9]/g, '');
  let productURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`;
  if (pathname.includes('drinks')) {
    productURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`;
  }
  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        if (pathname.includes('foods')) {
          console.log('entrei');
          setProductData({ ...data.meals[0] });
        }
        setProductData({ ...data.drinks[0] });
      });
  }, [productURL, pathname]);

  const getIngredientsAndMeasures = (obj) => {
    const ingredients = Object
      .keys(obj)
      .filter((ingItem) => ingItem.includes('Ingredient') && obj[ingItem]);
    const measures = Object
      .keys(obj)
      .filter((ingMeasure) => ingMeasure.includes('Measure') && obj[ingMeasure]);
    return ingredients.reduce((acc, ingredient, i) => {
      console.log(obj[ingredient]);
      return obj[ingredient].length
        ? (acc
          .push({
            ingredient: obj[ingredient],
            measure: obj[measures[i]],
          }) && acc)
        : acc;
    }, []);
  };

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    strYoutube,
    strMeal,
    strMealThumb,
  } = productData;
  console.log(productData);
  return (
    <div>
      <ProductHeader
        name={ strDrink || strMeal }
        image={ strDrinkThumb || strMealThumb }
        category={ strCategory }
      />
      <section>
        <h3>Ingredients</h3>
        <div data-testid={ `${1}-ingredient-name-and-measure` }>
          {
            getIngredientsAndMeasures(productData)
              .map(({ ingredient, measure }, index) => (
                <ul key={ index }>
                  <li>{`${ingredient} ${measure || ''}`}</li>
                </ul>
              ))
          }
        </div>
      </section>
      <section>
        <h3 data-testid="instructions">Instructions</h3>
        <div>
          {strInstructions}
        </div>
      </section>
      {
        strYoutube
        && (
          <section>
            <h3>Vídeo</h3>
            <iframe
              width="560"
              height="315"
              src={ strYoutube.replace('watch?v=', 'embed/') }
              title="YouTube video player"
              frameBorder="0"
              allow={ ('accelerometer; autoplay; clipboard-write;'
                + 'encrypted-media; gyroscope; picture-in-picture') }
              allowFullScreen
            />
          </section>
        )
      }
      <section>
        <h3>Recommended</h3>
        <div data-testid={ `${1}-recomendation-card` }>aqui vão 6 recomendações</div>
      </section>
      <Button
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </Button>
      <Footer />
    </div>
  );
}

export default DetailRecipes;
