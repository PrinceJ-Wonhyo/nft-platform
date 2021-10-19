import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames/bind";
import styles from "./_shop.scss";

const cx = classNames.bind(styles);

export default function Shop() {
  return (
    <div className={cx("shop")}>
      <section>
        <h2>How to get the goods</h2>
        <p>
          Supercharge your collection by buying packs of NFT Korea.
          <br />
          Grab a pack and secure this season's most coveted plays first.
        </p>
        <Link exact to="/">
          See all packs
        </Link>
        <Package />
      </section>
    </div>
  );
}

const Package = () => {
  const images = [
    {
      id: 1,
      src: "./assets/Package_tickets.png",
      description: "Mock Sample",
      width: "980",
      height: "157",
    },
    {
      id: 2,
      src: "./assets/Special_pack.png",
      description: "Mock Sample",
      width: "900",
      height: "401",
    },
    {
      id: 3,
      src: "./assets/Base_pack.png",
      description: "Mock Sample",
      width: "450",
      height: "401",
    },
  ];
  return (
    <div className="packages">
      {images.map(({ id, src, description, width, height }) => (
        <img
          key={id}
          src={src}
          alt={description}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};
