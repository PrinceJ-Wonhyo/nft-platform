import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames/bind";
import styles from "./_banner.scss";

const cx = classNames.bind(styles);

export default function Banner() {
  return (
    <div className="main-view">
      <div className={cx("banner")}>
        <section className="textblock">
          <header>
            <h1>Own the best NFT moments</h1>
            <p>
              Collect and trade officially licensed NFT KOREA digital
              collectibles
            </p>
          </header>
          <Link exact to="/" className="button-link">
            Start My Collection
          </Link>
          <NFTFans />
          <footer><small>600,000+ NFT fans own a moment</small></footer>
        </section>
        <section className="imageblock">
          <img
            src="./assets/NFTKOREA.png"
            alt="Kang Ho Dong NFT"
            width="572"
            height="572"
          />
        </section>
      </div>
      <AboutNft />
    </div>
  );
}

const NFTFans = () => {
  const images = [
    {
      id: 1,
      src: "./assets/Profile_icon_1.png",
      description: "Mock Sample Images",
    },
    {
      id: 2,
      src: "./assets/Profile_icon_2.png",
      description: "Mock Sample Images",
    },
    {
      id: 3,
      src: "./assets/Profile_icon_3.png",
      description: "Mock Sample Images",
    },
    {
      id: 4,
      src: "./assets/Profile_icon_4.png",
      description: "Mock Sample Images",
    },
  ];
  return (
    <div className="profile-icons">
      {images.map(({ id, src, description }) => (
        <img key={id} src={src} alt={description} width="47" height="47" />
      ))}
    </div>
  );
};

const AboutNft = () => {
  const offering = [
    {
      id: 1,
      tagline: "Purchase & rip",
      item: "Packs",
      src: "./assets/Card_packs.png",
      description: "Mock Sample Images",
      width: "110",
      height: "92.37",
    },
    {
      id: 2,
      tagline: "Build an epic",
      item: "Collection",
      src: "./assets/NFTKOREA.png",
      description: "Mock Sample Images",
      width: "99",
      height: "99",
    },
    {
      id: 3,
      tagline: "Win exclusive",
      item: "Rewards",
      src: "./assets/Challenge_reward.png",
      description: "Mock Sample Images",
      width: "165",
      height: "77",
    },
  ];
  return (
    <div className="offering">
      <section>
        <ul>
          {offering.map(
            ({ id, tagline, item, src, description, width, height }) => (
              <li key={id}>
                <Link exact to="/">
                  <p>{tagline}</p>
                  <h3>{item}</h3>
                  <img
                    src={src}
                    alt={description}
                    width={width}
                    height={height}
                  />
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};
