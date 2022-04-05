import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Context from '../Context/Context';
import { fetchCategories, fetchOneCategory } from '../services/fetchCategories';

function CategoryButtons() {
  const context = useContext(Context);
  const { setFilterFoods, setFilterDrinks } = context;
  const [btnOpt, setBtnOpt] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState('');
  const { location: { pathname } } = useHistory();
  const isFoodLocation = pathname.includes('food');
  const url = `https://www.${isFoodLocation
    ? 'themealdb'
    : 'thecocktaildb'
  }.com/api/json/v1/1/list.php?c=list`;

  const product = isFoodLocation ? 'meals' : 'drinks';
  const setContextProductFiltered = isFoodLocation ? setFilterFoods : setFilterDrinks;

  useEffect(() => {
    const getCategories = () => {
      fetchCategories(product, url)
        .then((result) => {
          setBtnOpt(result);
        })
        .catch((err) => console.log(err));
    };
    getCategories();
  }, [setBtnOpt, product, url]);

  useEffect(() => {
    if (filter.length) {
      fetchOneCategory(product, filter)
        .then((result) => setContextProductFiltered(result));
    }
  }, [isFiltered, filter, product, setContextProductFiltered]);

  const handleFilterClick = ({ target: { name } }) => {
    if (filter === name || name === 'All') {
      setContextProductFiltered([]);
      setFilter('');
      return setIsFiltered(false);
    }
    setIsFiltered((prevState) => !prevState);
    setFilter(name);
  };

  return (
    <div>
      {[{ strCategory: 'All' }, ...btnOpt].map(({ strCategory }) => (
        <Button
          type="button"
          key={ strCategory }
          name={ strCategory }
          value={ strCategory }
          onClick={ handleFilterClick }
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}
        </Button>))}
    </div>
  );
}

export default CategoryButtons;
