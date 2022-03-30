/* eslint-disable no-unreachable */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import '../App.css';

function CardProducts(props) {
  const { source } = props;
  const context = useContext(Context);
  const { data } = context;
  const renderFoodProduct = () => {
    const mealsMap = data.map((meal) => (
      {
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
      }
    ));
    return (
      mealsMap.map(({ id, name, image }) => (
        <article key={ id } className="card-product">
          <img src={ image } alt={ name } />
          <p>{name}</p>
        </article>
      ))
    );
  };

  const renderDrinkProduct = () => {
    const drinksMap = data.map((drink) => (
      {
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
      }
    ));
    return (
      drinksMap.map(({ id, name, image }) => (
        <div key={ id }>
          <img src={ image } alt={ name } />
          <p>{name}</p>
        </div>
      ))
    );
  };

  const renderDoneAndFavoriteProduct = (sourceProduct) => (
    data.map((item) => {
      const isFood = item.type === 'food';
      const isDoneScreen = sourceProduct === 'done';
      return (
        <article key={ item.id }>
          <img src={ item.image } alt={ item.name } />
          {
            isFood
              ? (
                <>
                  <p>{ `${item.nationality} - ${item.category}` }</p>
                  <h3>{item.name }</h3>
                  {
                    isDoneScreen
                    && (
                      <>
                        <p>{ `Done in: ${item.doneDate}` }</p>
                        {
                          item.tags.map((tag) => <b key={ tag }><p>{tag}</p></b>)
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
                  && <p>{ `Done in: ${item.doneDate}` }</p>
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
