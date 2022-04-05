import React from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({
  title,
  showSearchButton,
  setIsSearchBarVisible,
  isSearchBarVisible,
}) {
  return (
    <Navbar
      data-testid="page-title"
      className="d-flex justify-content-between fluid align-items-center"
      sticky="top"
    >
      <Link to="/profile">
        <img src={ profileIcon } alt="" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title" className="m-0">{title}</h1>
      {showSearchButton ? (
        <Button
          variant="link"
          onClick={ () => setIsSearchBarVisible(!isSearchBarVisible) }
        >
          <img src={ searchIcon } alt="" data-testid="search-top-btn" />
        </Button>
      ) : <div />}
    </Navbar>
  );
}

Header.defaultProp = {
  showSearchButton: false,
  isSearchBarVisible: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchButton: PropTypes.bool.isRequired,
  isSearchBarVisible: PropTypes.bool.isRequired,
  setIsSearchBarVisible: PropTypes.func.isRequired,
};
export default Header;
