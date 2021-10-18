import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames/bind";
import styles from "./_footer.scss";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("footer")}>
      <section>
        <Copyright />
      </section>
      <section>
        <FooterLinks />
      </section>
    </div>
  );
}

const FooterLinks = () => {
  const src = "./assets/Globe.png";
  const siteLinks = ["Status", "Help", "Press", "Blog", "Sign Up"];
  const snsLinks = ["Discord", "Twitter", "Instagram", "Terms", "Privacy"];
  return (
    <div className="clickable">
      <div className="internal-links">
        <ul>
          {siteLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link exact to="/">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul>
          {snsLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link exact to="/">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="external-links">
        <img src={src} alt="Mock Sample Images" width="50" height="50" />
        <img src={src} alt="Mock Sample Images" width="50" height="50" />
        <img src={src} alt="Mock Sample Images" width="50" height="50" />
      </div>
    </div>
  );
};

const Copyright = () => {
  const warnings = [
    "© NFT Korea Labs, Inc.",
    "© 2021 NFT Properties, Tnc. All Rights Reserved.",
    "Officially licensed product of NFT Korea Association. Do Not Sell My Personal Information.",
    "This site is protected by Captcha and its Privacy Policy and Terms of Service apply.",
  ];
  return (
    <div>
      {warnings.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};
