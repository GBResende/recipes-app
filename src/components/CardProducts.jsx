import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import '../App.css';

function CardProducts(props) {
  const { source } = props;
  const context = useContext(Context);
  const { dataFoods, dataDrinks } = context;
  const renderFoodProduct = () => {
    const mealsMap = dataFoods.map((meal) => (
      {
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
      }
    ));
    return (
      mealsMap.map(({ id, name, image }) => (
        <Link key={ id } to={ `/foods/${id}` }>
          <article className="card-product">
            <img src={ image } alt={ name } />
            <p>{name}</p>
          </article>
        </Link>
      ))
    );
  };

  const renderDrinkProduct = () => {
    const drinksMap = dataDrinks.map((drink) => (
      {
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
      }
    ));
    return (
      drinksMap.map(({ id, name, image }) => (
        <Link key={ id } to={ `/drinks/${id}` }>
          <article key={ id }>
            <img src={ image } alt={ name } />
            <p>{name}</p>
          </article>
        </Link>
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
