import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const storedLocalEmail = JSON.parse(localStorage.getItem('user')).email;
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  const handleBtnDone = () => {
    history.push('/done-recipes');
  };
  const handleBtnFav = () => {
    history.push('/favorite-recipes');
  };

  return (
    <div>
      <Header
        title="Profile"
        showSearchButton={ false }
        setIsSearchBarVisible={ () => false }
        isSearchBarVisible={ false }
      />
      <p>exibir header e footer </p>
      <h3 data-testid="profile-email">{ storedLocalEmail }</h3>
      <button
        type="button"
        onClick={ handleBtnDone }
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        type="button"
        onClick={ handleBtnFav }
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        onClick={ handleLogout }
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
