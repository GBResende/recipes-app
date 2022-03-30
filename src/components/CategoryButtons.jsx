import React, { useContext } from 'react';
import Context from '../Context/Context';

function CategoryButtons() {
  const context = useContext(Context);
  const { filterFoods, setFilterFoods } = context;
  const categoriesArr = ['All', 'Beef', 'Lamb', 'Chicken', 'Breakfast', 'Dessert'];

  const handleFilterClick = ({ target }) => {
    // console.log('target', target);
    setFilterFoods([
      ...filterFoods,
      target.value,
    ]);
    // console.log('filter foods', filterFoods);
  };

  return (
    <div>
      {categoriesArr.map((item) => (
        <button
          type="button"
          key={ item }
          name={ item }
          value={ item }
          onClick={ handleFilterClick }
        >
          {item}
        </button>))}
    </div>
  );
}

export default CategoryButtons;
