import React, { useState } from 'react';
import './AuthPage.scss';

const AuthPage = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const changeHandler = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <div className="p-authPage row">
      <div className="col s6 offset-s3">

        <h1>Сократи ссылку</h1>

        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>

            <div className="form">
              <div className="input-field">
                <input 
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input 
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Пароль</label>
              </div>
            </div>

          </div>
          <div className="card-action g-flex">
            <button className="btn yellow darken-4 btn--sign">Войти</button>
            <button className="btn grey lighten-1 black-text">Регистрация</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AuthPage;