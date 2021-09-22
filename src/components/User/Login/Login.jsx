import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import './Login.css';

function initialState() {
  return { user: '', password: ''};
}

// async function login({ user, password }) {
//     //return { token: 'teste'};
// }

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  let history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(event) {
    event.preventDefault();
    setToken("token-teste");
    history.push("/");

    setValues(initialState);  //reseta valores do form caso nao tenha token
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input 
            id="user" 
            type="text" 
            name="user" 
            onChange={onChange} 
            value={values.user} 
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={onChange} 
            value={values.password} 
          />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;
