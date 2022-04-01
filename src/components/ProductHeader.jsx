import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { setFavoriteToLocalStorage } from '../services/localStorage';

function ProductHeader(props) {
  const [favorite, setFavorite] = useState(false);
  const [isCopiedLink, setIsCopiedLink] = useState(false);
  // const [inProgress, setInProgress] = useState(false);
  const { image, name, category, alcoholic, linkRecipe, productID, nationality } = props;

  useEffect(() => {
    const favoritesFromLocalStorage = JSON
      .parse(localStorage.getItem('favoriteRecipes') || '[]');
    if (favoritesFromLocalStorage.some((fav) => fav.id === productID)) {
      console.log('entrei');
      setFavorite(true);
    }
    // const inProgressFromLocalStorage = JSON
    //   .parse(localStorage.getItem('favoriteRecipes'));
    //   Object.keys(inProgressFromLocalStorage)
  }, []);

  const handleClickFavorite = () => {
    setFavorite(!favorite);

    const type = linkRecipe.includes('foods') ? 'food' : 'drink';
    const objectTest = {
      id: productID,
      name,
      image,
      category,
      alcoholicOrNot: alcoholic,
      type,
      nationality,
    };
    console.log(objectTest);
    setFavoriteToLocalStorage(objectTest, favorite);
  };

  const rgba = 'rgba(0, 0, 0, 0%)';

  const handleClickShare = () => {
    setIsCopiedLink(true);
    copy(linkRecipe);
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ image }
        alt="foto da comida ou bebida"
      />
      <h3 data-testid="recipe-title">{name}</h3>
      <h5 data-testid="recipe-category">{category}</h5>
      <h5>{alcoholic}</h5>
      <button
        data-testid="favorite-btn"
        type="button"
        onClick={ handleClickFavorite }
        style={ {
          backgroundColor: rgba,
          border: '0',
        } }
      >
        <img src={ !favorite ? whiteHeartIcon : blackHeartIcon } alt="not favorite" />
      </button>
      {
        isCopiedLink
          ? (
            <span>Link copied!</span>
          )
          : (
            <button
              data-testid="share-btn"
              type="button"
              onClick={ handleClickShare }
              style={ {
                backgroundColor: rgba,
                border: '0',
              } }
            >
              <img src={ shareIcon } alt="copy" />
            </button>
          )
      }

    </div>
  );
}

ProductHeader.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  linkRecipe: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
};

export default ProductHeader;
