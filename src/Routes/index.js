import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from '../App';
import CardProducts from '../components/CardProducts';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ CardProducts } />
    <Route path="/foods" component={ () => <h1>Foods</h1> } />
    <Route path="/drinks" component={ () => <h1>Drinks</h1> } />
    <Route
      path="/foods/:id"
      render={
        (props) => <h1 { ...props }>Tela de detalhes de uma receita de comida</h1>
      }
    />
    <Route
      path="/drinks/:id"
      render={
        (props) => <h1 { ...props }>Tela de detalhes de uma receita de bebida</h1>
      }
    />
    <Route
      path="/foods/:id/in-progress"
      render={ (props) => <h1 { ...props }>Tela de receita em progresso de comida</h1> }
    />
    <Route
      path="/drinks/:id/in-progress"
      render={ (props) => <h1 { ...props }>Tela de receita em progresso de bebida</h1> }
    />
    <Route path="/explore" component={ () => <h1>Tela de explorar</h1> } />
    <Route path="/explore/foods" component={ () => <h1>Tela de explorar comidas</h1> } />
    <Route path="/explore/drinks" component={ () => <h1>Tela de explorar bebidas</h1> } />
    <Route
      path="/explore/foods/ingredients"
      component={
        () => <h1>Tela de explorar comidas por ingrediente</h1>
      }
    />
    <Route
      path="/explore/drinks/ingredients"
      component={ () => <h1>Tela de explorar comidas por ingrediente</h1> }
    />
    <Route
      path="/explore/foods/nationalities"
      component={ () => <h1>Tela de explorar bebidas por nacionalidade</h1> }
    />
    <Route path="/profile" component={ () => <h1>Tela de perfil</h1> } />
    <Route path="/done-recipes" component={ () => <h1>Tela de receitas feitas</h1> } />
    <Route
      path="/favorite-recipes"
      component={ () => <h1>Tela de receitas favoritas</h1> }
    />
    <Route path="*" component={ () => <h1>Page Not Found</h1> } />
  </Switch>
);

export default Routes;
