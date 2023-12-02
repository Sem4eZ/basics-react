import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SubButton from "../button/SubButton";
import { AuthContext } from "./../../../context/index";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="nav__link" to="/about">
          О Сайте
        </Link>
        <Link className="nav__link" to="/posts">
          Посты
        </Link>
      </div>
      <SubButton className="nav__btn" onClick={logout}>
        {" "}
        Выйти
      </SubButton>
    </div>
  );
};

export default Navbar;
