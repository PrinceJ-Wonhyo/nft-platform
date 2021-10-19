import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class Moments extends Component {
  render() {
    const item = [
      {
        id: 1,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 2,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 3,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 4,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 5,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 6,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 7,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 8,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 9,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
      {
        id: 10,
        itemImg: "./assets/NFTKOREA.png",
        hot: "./assets/hot.png",
        name: "Card Name",
        desc: "Dunk - Base Set",
        series: "(Series 2)",
        rarity: "Common #/4000",
        badge: "./assets/logo.png",
        badge2: "./assets/logo-1.png",
        lowPrice: 8.0,
        avgSale: 6.79,
      },
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    return (
      <div className="hot-moments">
        <header>
          <h3> WHATS HOT </h3>
          <Link exact to="/">Explore Marketplace</Link>
        </header>
        <Slider {...settings}>
          {item.map(
            ({
              itemImg,
              hot,
              name,
              desc,
              series,
              rarity,
              badge,
              badge2,
              lowPrice,
              avgSale,
              id,
            }) => (
              <div className="card" key={id}>
                <div className="hot-item">
                  <img src={itemImg} width="106" height="106" alt="" />
                  <div className="item-copy">
                    <img src={hot} alt="" width="50" height="19" />
                    <p className="item-name">{name}</p>
                    <p className="item-desc">{desc}<br />{series}</p>
                    <p>
                      {rarity}
                      <span>LE</span>
                    </p>
                    <img src={badge} alt="" width="23" height="23" />
                    <img src={badge2} alt="" width="23" height="23" />
                  </div>
                </div>
                <footer>
                  <div>
                    <small>Lowest Ask</small>
                    <p>USD ${lowPrice}</p>
                  </div>
                  <div>
                    <small>Avg Sale in last 14 Days</small>
                    <p>${avgSale}</p>
                  </div>
                </footer>
              </div>
            )
          )}
        </Slider>
      </div>
    );
  }
}
