import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';

function DetailRecipes() {
  // const history = useHistory();
  // const productId = history.location.pathname.id;
  const productId = '52882';
  const productURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`;

  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.meals[0]);
        setProductData({ ...data.meals[0] });
      });
  }, [productURL]);

  const getIngredientsAndMeasures = (obj) => {
    const ingredients = Object
      .keys(obj)
      .filter((ingItem) => ingItem.includes('Ingredient'));
    const measures = Object
      .keys(obj)
      .filter((ingMeasure) => ingMeasure.includes('Measure'));
    return ingredients.reduce((acc, ingredient, i) => (
      obj[ingredient].length
        ? (acc
          .push({ ingredient: obj[ingredient],
            measure: obj[measures[i]] }) && acc)
        : acc
    ), []);
  };

  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = productData;
  return (
    <div>
      <ProductHeader name={ strMeal } image={ strMealThumb } category={ strCategory } />
      <section>
        <h3>Ingredients</h3>
        <div data-testid={ `${1}-ingredient-name-and-measure` }>
          {
            getIngredientsAndMeasures(productData)
              .map(({ ingredient, measure }, index) => (
                <ul key={ index }>
                  <li>{`${ingredient} ${measure}`}</li>
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
      <section>
        <h3>Vídeo</h3>
        {/* <video controls>
          <source src={ strYoutube } type="video/mp4" />
          <track
            kind="captions"
            srcLang="en"
            src={ strYoutube }
          />
        </video> */
          console.log(strYoutube)
        }
        {
          strYoutube
          && <iframe
            width="560"
            height="315"
            src={ strYoutube.replace('watch?v=', 'embed/') }
            title="YouTube video player"
            frameBorder="0"
            allow={ ('accelerometer; autoplay; clipboard-write;'
            + 'encrypted-media; gyroscope; picture-in-picture') }
            allowFullScreen
          />
        }
      </section>
      <section>
        <h3>Recommended</h3>
        <div data-testid={ `${1}-recomendation-card` }>aqui vão 6 recomendações</div>
      </section>
      <button data-testid="start-recipe-btn" type="button">Start Recipe</button>
    </div>
  );
}

export default DetailRecipes;
