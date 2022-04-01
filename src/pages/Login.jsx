import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const handleChange = ({ target }) => {
    if (target.type === 'text') {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('drinksToken', '1');
    history.push('/foods');
  };

  useEffect(() => {
    const emailCheck = new RegExp('[a-z0-9]+@[a-z]+.[a-z]');
    const passwordCheck = 6;
    const finalCheck = password.length >= passwordCheck && emailCheck.test(email);
    setIsDisabled(finalCheck);
  }, [password, email]);

  return (
    <div>
      <p>Login</p>
      <input
        type="text"
        placeholder="digite seu email"
        value={ email }
        onChange={ handleChange }
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="digite sua senha"
        value={ password }
        onChange={ handleChange }
        data-testid="password-input"
      />
      <Button
        type="button"
        onClick={ handleClick }
        disabled={ isDisabled }
        data-testid="login-submit-btn"
      >
        Enter
      </Button>
    </div>
  );
}

export default Login;
