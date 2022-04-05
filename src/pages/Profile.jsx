import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => (
  <>
    <Header title="Profile" />
    <div>Profile</div>
    <p>exibir header e footer </p>
    <p>email do usuario-pegar no local storage </p>
    <button type="button">
      Done Recipes
    </button>
    <button type="button">
      Favorite Recipes
    </button>
    <button type="button">
      Logout
    </button>
    <Footer />
  </>
);

export default Profile;
