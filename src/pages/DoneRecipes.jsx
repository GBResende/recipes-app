import React, { useContext, useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Context from '../Context/Context';
import Header from '../components/Header';
import RecipesFilters from '../components/RecipesFilters';
import shareIcon from '../images/shareIcon.svg';

const DoneRecipes = () => {
  const { pathname, href } = window.location;
  const { filterRecipes } = useContext(Context);
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const recipeLink = (recipe) => {
    const { id, type } = recipe;
    return pathname.replace('/done-recipes', `/${type}s/${id}`);
  };

  const showCategory = ({ type, nationality, category, alcoholicOrNot }) => {
    if (type === 'food') {
      return `${nationality} - ${category}`;
    }
    if (type === 'drink') {
      return alcoholicOrNot || `Non-${alcoholicOrNot}`;
    }
  };
  return (
    <>
      <Header title="Done Recipes" />
      <RecipesFilters />

      {filterRecipes && filterRecipes.map((recipe, index) => (
        <Card
          key={ recipe.id }
          className="d-flex flex-row mt-4 position-relative"
          data-testid={ `${index}-horizontal-card` }
        >
          <Link to={ recipeLink(recipe) } className="d-flex flex-row">
            <Card.Img
              src={ recipe.image }
              alt={ recipe.name }
              data-testid={ `${index}-horizontal-image` }
            />
            <div>

              <span data-testid={ `${index}-horizontal-top-text` }>
                {showCategory(recipe)}
              </span>
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {recipe.doneDate}
              </p>
              <div className="d-flex flex-row">
                {recipe.tags
              && recipe.tags.map((tag, tagIndex) => (
                <p
                  key={ tagIndex }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </p>
              ))}
              </div>
            </div>
          </Link>
          {isCopiedLink ? (
            <span className="position-absolute top-0 right-0">Link copied!</span>
          ) : (
            <Button
              className="position-absolute top-0 right-0"
              variant="link"
              type="button"
              style={ { right: 0 } }
              onClick={ () => {
                setIsCopiedLink(true);
                copy(
                  href.replace(
                    '/done-recipes',
                    `/${recipe.type}s/${recipe.id}`,
                  ),
                );
              } }
            >
              <Card.Img
                src={ shareIcon }
                alt="copy"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </Button>
          )}
        </Card>
      ))}
    </>
  );
};

export default DoneRecipes;
