import { NavLink } from "react-router-dom";
import React from "react";
import classNames from "classnames/bind";
import styles from "./_nav.scss";

const cx = classNames.bind(styles);

const Menu = () => {
  const menuItem = ["packs", "marketplace", "community", "help", "challenges"];
  return (
    <div>
      <Logo />
      <ul>
        {menuItem.map((item, i) => {
          return (
            <li key={i}>
              <NavLink exact to={"/" + item}>
                {item.toUpperCase()}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export function DesktopNav() {
  return (
    <div className={cx("desktop-nav")}>
      <nav>
        <Menu />
        <LoginBtn />
      </nav>
    </div>
  );
}

export function MobileNav({ menuOpen, setMenuOpen }) {
  return (
    <div className={cx("mobile-nav")}>
      <header>
        <div
          className={menuOpen ? "burger active" : cx("burger")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Logo />
        <img
          class="beta-btn"
          src="./assets/Beta_btn.png"
          width="55"
          height="16"
          alt="Beta Notification"
        />
      </header>
      <LoginBtn />
    </div>
  );
}

const Logo = () => {
  return (
    <div>
      <NavLink exact to="/" className="logo">
        <img
          src="./assets/NFT_Korea_Logo.png"
          width="264"
          height="32"
          alt="NFT Korea Logo"
        />
      </NavLink>
    </div>
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
