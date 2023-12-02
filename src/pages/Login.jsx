import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import SubButton from "./../components/UI/button/SubButton";
import { AuthContext } from "./../context/index";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1 className="my-4 text-xl">Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <SubButton className="mx-4">Войти</SubButton>
      </form>
    </div>
  );
};

export default Login;
