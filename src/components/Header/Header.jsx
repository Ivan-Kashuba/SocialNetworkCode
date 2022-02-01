import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import tag from "../../assets/img/tag.png";
import logOut from "../../assets/img/logout.png";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img className={style.logo} src={tag} alt="img" />
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div className={style.logginedInfo}>
            <NavLink to={"/profile/"}>
              <img
                className={style.loginnedPhoto}
                src={"https://html5css.ru/howto/img_avatar.png"}
                alt="User"
              />
            </NavLink>
            {props.login} -
            <div onClick={props.logout}>
              <img className={style.logout} src={logOut} alt="logout" />
            </div>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
