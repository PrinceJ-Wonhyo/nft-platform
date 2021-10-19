import { NavLink } from "react-router-dom";
import React from "react";
import classNames from "classnames/bind";
import styles from "./_nav.scss";

const cx = classNames.bind(styles);

function DesktopNav() {
  return (
    <div className={cx("desktop-nav")}>
      <nav className="nav-bar">
        <Menu />
        <LoginBtn />
      </nav>
    </div>
  );
}

const Logo = () => {
  return (
    <div className="nav-logo">
      <NavLink exact to="/" className="logo">
        <img
          src="./assets/NFT_Korea_Logo.png"
          width="264"
          height="32"
          alt="NFT Korea Logo"
        />
        <img
          src="./assets/Beta_btn.png"
          width="55"
          height="16"
          alt="Beta Button"
        />
      </NavLink>
    </div>
  );
};

const Menu = () => {
  const menuItem = ["packs", "marketplace", "community", "help", "challenges"];
  return (
    <>
      <Logo />
      <ul className="nav-options">
        {menuItem.map((item, i) => {
          return (
            <li key={i}>
              <NavLink className="nav-clickable" exact to={"/" + item}>
                {item.toUpperCase()}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const LoginBtn = () => {
  const accountButton = ["log in", "sign up"];
  return (
    <ul className="login-btn">
      {accountButton.map((item, i) => {
        return (
          <li key={i}>
            <NavLink exact to={"/" + item.replace(" ", "-")}>
              {item.toUpperCase()}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
