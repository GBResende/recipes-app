import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function ProductHeader(props) {
  const [favorite, setFavorite] = useState(false);

  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };

  const rgba = 'rgba(0, 0, 0, 0%)';

  const { image, name, category } = props;
  console.log(image);
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ image }
        alt="foto da comida ou bebida"
      />
      <h3 data-testid="recipe-title">{name}</h3>
      <h5 data-testid="recipe-category">{category}</h5>
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
      <button
        data-testid="share-btn"
        type="button"
        onClick={ () => copy('colocar aqui o link da página atual') }
        style={ {
          backgroundColor: rgba,
          border: '0',
        } }
      >
        <img src={ shareIcon } alt="copy" />
      </button>
    </div>
  );
}

ProductHeader.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductHeader;
