import React, { useState } from 'react';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function ProductHeader() {
  const [favorite, setFavorite] = useState(false);

  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };

  const rgba = 'rgba(0, 0, 0, 0%)';

  return (
    <div>
      <img src="" alt="foto da comida ou bebida" />
      <h3>Nome da comida</h3>
      {
        !favorite
          ? (
            <button
              type="button"
              onClick={ handleClickFavorite }
              style={ {
                backgroundColor: rgba,
                border: '0',
              } }
            >
              <img src={ whiteHeartIcon } alt="not favorite" />
            </button>
          )
          : (
            <button
              type="button"
              onClick={ handleClickFavorite }
              style={ {
                backgroundColor: rgba,
                border: '0',
              } }
            >
              <img src={ blackHeartIcon } alt="favorite" />
            </button>
          )
      }
      <button
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

export default ProductHeader;
