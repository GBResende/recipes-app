import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import { Button } from 'react-bootstrap';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { setFavoriteToLocalStorage } from '../services/localStorage';

const showCategory = (type, category, alcoholicOrNot) => {
  if (type === 'food') {
    return category;
  }
  if (type === 'drink') {
    return alcoholicOrNot;
  }
};

function ProductHeader(props) {
  const [favorite, setFavorite] = useState(false);
  const [isCopiedLink, setIsCopiedLink] = useState(false);
  const { location: { pathname } } = useHistory();
  const { location: { origin } } = window;
  const isFoodLocation = pathname.includes('food');
  const itemType = isFoodLocation ? 'food' : 'drink';

  const {
    image,
    name,
    category,
    alcoholic,
    linkRecipe,
    productID,
    nationality,
  } = props;

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(
      localStorage.getItem('favoriteRecipes') || '[]',
    );
    if (favoritesFromLocalStorage.some((fav) => fav.id === productID)) {
      setFavorite(true);
    }
  }, [productID, setFavorite]);

  const type = linkRecipe.includes('foods') ? 'food' : 'drink';
  const handleClickFavorite = () => {
    setFavorite(!favorite);

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

  const handleClickShare = () => {
    setIsCopiedLink(true);
    copy(`${origin}/${type === 'food' ? 'foods' : 'drinks'}/${productID}`);
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ image }
        alt="foto da comida ou bebida"
      />
      <h3 data-testid="recipe-title">{name}</h3>
      <h5 data-testid="recipe-category">
        {showCategory(itemType, category,
          alcoholic)}
      </h5>
      <Button
        variant="link"
        type="button"
        onClick={ handleClickFavorite }
      >
        <img
          data-testid="favorite-btn"
          src={ !favorite ? whiteHeartIcon : blackHeartIcon }
          alt="not favorite"
        />
      </Button>
      {isCopiedLink ? (
        <span>Link copied!</span>
      ) : (
        <Button
          variant="link"
          data-testid="share-btn"
          type="button"
          onClick={ handleClickShare }
        >
          <img src={ shareIcon } alt="copy" />
        </Button>
      )}
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
