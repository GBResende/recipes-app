import React from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ProductHeader from '../components/ProductHeader';

function FavoritesRecipes() {
  // const history = useHistory();
  const storedFavs = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log('storedFavs', storedFavs);

  return (
    <div>
      <Header
        title="Favorite Recipes"
        showSearchButton={ false }
        setIsSearchBarVisible={ () => false }
        isSearchBarVisible={ false }
      />
      <p>FavoritesRecipes</p>
      <div>
        {storedFavs && storedFavs.map((storedFav) => (
          <div
            key={ storedFav.name }
          >
            <ProductHeader
              productID={ storedFav.id }
              image={ storedFav.image }
              name={ storedFav.name }
              category={ storedFav.category }
              linkRecipe={ `/${storedFav.type}s/${storedFav.id}` }
              nationality={ storedFav.nationality }
              alcoholic={ storedFav.alcoholicOrNot }
              type={ storedFav.type }

            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default FavoritesRecipes;
