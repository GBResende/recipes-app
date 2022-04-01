import React, { useContext, useState, useEffect } from 'react';
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
  // const contextFiltered = isFoodLocation ? filterFoods : filterDrinks;
  const setContextFiltered = isFoodLocation ? setFilterFoods : setFilterDrinks;

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
    if (!isFiltered) return setContextFiltered([]);
    fetchOneCategory(product, filter)
      .then((result) => setContextFiltered(result));
  }, [isFiltered, filter, product, setContextFiltered]);

  const handleFilterClick = ({ target: { name } }) => {
    if (!filter.length) {
      setIsFiltered((prevState) => !prevState);
      setFilter(name);
    }
    // quando clicar verificar se tem coisa no filter
    // se tiver e for igual ao 'name' remove filtros
    // se for diferente filtra novamente
  };

  return (
    <div>
      { isFiltered && <p>FILTRADO</p>}
      <button
        type="button"
        onClick={ handleFilterClick }
        data-testid="All-category-filter"
      >
        All
      </button>
      {btnOpt.map(({ strCategory }) => (
        <button
          type="button"
          key={ strCategory }
          name={ strCategory }
          value={ strCategory }
          onClick={ handleFilterClick }
          data-testid={ `${strCategory.toLowerCase()}-category-filter` }
        >
          {strCategory}
        </button>))}
    </div>
  );
}

export default CategoryButtons;
