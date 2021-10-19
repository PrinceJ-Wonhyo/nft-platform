import ListingGallery from "./ListingGallery";
import Moments from "./Moments";
import Producers from "./Producers";
import React from "react";
import Spotlight from "./Spotlight";
import classNames from "classnames/bind";
import styles from "./_marketplace.scss";

const cx = classNames.bind(styles);

export default function Marketplace() {
  return (
    <div className={cx("marketplace")}>
      <ListingGallery />
      <section>
        <Moments />
        <Producers />
      </section>
      <hr />
      <Spotlight />
    </div>
  );
}
