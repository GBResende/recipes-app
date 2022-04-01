import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import DetailRecipes from '../pages/DetailRecipes';
import InProgressRecipes from '../pages/InProgressRecipes';
import Explorer from '../pages/Explorer';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoods from '../pages/ExploreFoods';
import FoodsIngredients from '../pages/FoodsIngredients';
import DrinksIngredients from '../pages/DrinksIngredients';
import FoodsNationality from '../pages/FoodsNationality';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoritesRecipes from '../pages/FavoritesRecipes';

const Routes = () => {
  const pathAndComponent = [
    { path: '/', component: (props) => <Login { ...props } /> },
    { path: '/foods', component: (props) => <Foods { ...props } /> },
    { path: '/drinks', component: (props) => <Drinks { ...props } /> },
    { path: '/foods/:id', component: (props) => <DetailRecipes { ...props } /> },
    { path: '/drinks/:id', component: (props) => <DetailRecipes { ...props } /> },
    { path: '/foods/:id/in-progress',
      component: (props) => <InProgressRecipes { ...props } /> },
    { path: '/drinks/:id/in-progress',
      component: (props) => <InProgressRecipes { ...props } /> },
    { path: '/explore', component: (props) => <Explorer { ...props } /> },
    { path: '/explore/foods', component: (props) => <ExploreFoods { ...props } /> },
    { path: '/explore/drinks', component: (props) => <ExploreDrinks { ...props } /> },
    { path: '/explore/foods/ingredients',
      component: (props) => <FoodsIngredients { ...props } /> },
    { path: '/explore/drinks/ingredients',
      component: (props) => <DrinksIngredients { ...props } /> },
    { path: '/explore/foods/nationalities',
      component: (props) => <FoodsNationality { ...props } /> },
    { path: '/profile', component: (props) => <Profile { ...props } /> },
    { path: '/done-recipes', component: (props) => <DoneRecipes { ...props } /> },
    { path: '/favorite-recipes',
      component: (props) => <FavoritesRecipes { ...props } /> },
  ];

  return (
    <Switch>
      {
        pathAndComponent.map(({ path, component }) => (
          <Route key={ path } exact path={ path } render={ component } />
        ))
      }
      <Route path="*" component={ () => <h1>Page Not Found</h1> } />
    </Switch>
  );
};

export default Routes;
