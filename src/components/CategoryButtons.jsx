import React from 'react';

function CategoryButtons() {
  const categoriesArr = [All, Beef, Lamb, Chicken, Breakfast, Dessert];

  return (
    <div>
      {categoriesArr.map((item) => <button type="button" key={ item }>{item}</button>)}
    </div>
  );
}

export default CategoryButtons;
