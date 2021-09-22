import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import logo from './../../../img/ioasys.png';
import bookstitle from './../../../img/books.png';
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

      <div className="login-img">
        <img src={logo} className="logo" alt="logo"/>
        <img src={bookstitle} className="bookstitle" alt="bookstitle"/>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <input id="user" type="text" name="user" placeholder="Email" onChange={onChange} value={values.user} />
        </div>
        <div className="user-login__form-control">
          <input id="password" type="password" name="password" placeholder="Senha" onChange={onChange} value={values.password} />
          <UIButton type="submit" theme="contained-green" className="user-login__submit-button" rounded> Entrar </UIButton>
        </div>

      </form>
    </div>
  );
};

export default UserLogin;
