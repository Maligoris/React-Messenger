import React, { useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const [login, setLogin] = useState("Введите логин"); 
  const [password, setPassword] = useState("Введите пароль");

  return (
    <div className={classes.AuthForm}>
      <div className={classes.content}>
        <input
          className={classes.login}
          type="text"
          value={login}
          onChange={(event) => setLogin(event.target.setPassword)}
        />
        <br />
        <input
          className={classes.psw}
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.setPassword)}
        />
      </div>
      <button className={classes.btn}>Войти</button>
    </div>
  );
};

export default AuthForm;
