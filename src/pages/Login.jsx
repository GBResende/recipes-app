import React from 'react';
import { useHistory } from 'react-router-dom';
import CategoryButtons from '../components/CategoryButtons';
import SearchBar from '../components/SearchBar';

function Login() {
  const history = useHistory();
  return (
    <div>
      <p>Login</p>
      <SearchBar />
      <CategoryButtons />
      <button type="button" onClick={ () => history.push('/foods') }>
        FOODS
      </button>
    </div>
  );
}

export default Login;
