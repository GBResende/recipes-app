import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import '../App.css';

function CardProducts(props) {
  const { source } = props;
  const context = useContext(Context);
  const { dataFoods, dataDrinks, filterFoods, filterDrinks } = context;
  const renderFoodProduct = () => {
    const toShow = filterFoods.length ? [...filterFoods] : [...dataFoods];
    const mealsMap = toShow.map((meal) => (
      {
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
      }
    ));
    return (
      mealsMap.map(({ id, name, image }, index) => (
        <Link key={ id } to={ `/foods/${id}` }>
          <article data-testid={ `${index}-recipe-card` }>
            <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` }>{name}</p>
          </article>
        </Link>
      ))
    );
  };

  const renderDrinkProduct = () => {
    const toShow = filterDrinks.length ? [...filterDrinks] : [...dataDrinks];
    const drinksMap = toShow.map((drink) => (
      {
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
      }
    ));
    return (
      drinksMap.map(({ id, name, image }, index) => (
        <Link key={ id } to={ `/drinks/${id}` }>
          <article data-testid={ `${index}-recipe-card` }>
            <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` }>{name}</p>
          </article>
        </Link>
      ))
    );
  };

  const renderDoneAndFavoriteProduct = (sourceProduct) => (
    data.map((item, index) => {
      const isFood = item.type === 'food';
      const isDoneScreen = sourceProduct === 'done';
      return (
        <article key={ item.id }>
          <img
            src={ item.image }
            alt={ item.name }
            data-testid={ `${index}-horizontal-image` }
          />
          {
            isFood
              ? (
                <>
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { `${item.nationality} - ${item.category}` }

                  </p>
                  <h3 data-testid={ `${index}-horizontal-name` }>{item.name }</h3>
                  {
                    isDoneScreen
                    && (
                      <>
                        <p
                          data-testid={ `${index}-horizontal-done-date` }
                        >
                          { `Done in: ${item.doneDate}` }

                        </p>
                        {
                          item.tags.map((tag, indexItem) => (
                            <b
                              key={ tag }
                              data-testid={ `${indexItem}-${tag}-horizontal-tag` }
                            >
                              <p>{tag}</p>
                            </b>
                          ))
                        }
                      </>
                    )
                  }
                </>
              )
              : (
                <>
                  <p>{ item.alcoholicOrNot }</p>
                  <h3>{item.name }</h3>
                  {
                    isDoneScreen
                  && (
                    <p
                      data-testid={ `${index}-horizontal-done-date` }
                    >
                      { `Done in: ${item.doneDate}` }

                    </p>
                  )
                  }
                </>
              )
          }
          <p>SHAREICON</p>
          {
            !isDoneScreen
            && <p>FAVORITEICON</p>
          }
        </article>
      );
    })
  );

  const sources = {
    food: () => renderFoodProduct(),
    drink: () => renderDrinkProduct(),
    done: () => renderDoneAndFavoriteProduct(source),
    favorite: () => renderDoneAndFavoriteProduct(source),
  };
  return sources[source]();
}

export default CardProducts;

CardProducts.propTypes = {
  source: PropTypes.string.isRequired,
  products: PropTypes.shape().isRequired,
};
