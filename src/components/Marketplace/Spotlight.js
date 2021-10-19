import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";

const spotNFT = [
  {
    id: 1,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 2,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 3,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 4,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 5,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 6,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 7,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 8,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 9,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
  {
    id: 10,
    itemImg: "./assets/NFTKOREA.png",
    name: "GANG HO DONG",
    series: "SEEING STARS S2",
    starIcon: "./assets/Globe.png",
    moment: "./assets/Moment.png",
  },
];

export default class Spotlight extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    index: 0,
    showPrevArrow: false,
    showNextArrow: spotNFT.length > 1,
  };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      afterChange: () => this.setState((id) => ({ index: id - 1 })),
      beforeChange: (prev, next) =>
        this.setState(
          { showPrevArrow: next > 0, showNextArrow: next < spotNFT.length - 1 },
          console.log(prev)
        ),
    };
    return (
      <div className="spotlight-nft">
        <h3>Spotlight</h3>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {spotNFT.map(({ itemImg, name, series, starIcon, moment, id }) => (
            <section className="nft-card" key={id}>
              <div className="nft-image">
                <img src={itemImg} alt="" width="398" height="398" />
              </div>
              <div className="nft-copy">
                <img src={starIcon} alt="" width="84" height="84" />
                <img src={moment} alt="" width="84" height="20" />
                <h2>{name}</h2>
                <p>{series}</p>
                <Link exact to="/" className="spotlight-explore">
                  SEE MORE
                </Link>
              </div>
            </section>
          ))}
        </Slider>
        <div style={{ textAlign: "center" }}>
          {this.state.showPrevArrow && (
            <button className="button prev" onClick={this.previous}>
              <p>Previous</p>
              <img
                src={"./assets/left-arrow.png"}
                width="12"
                height="22"
                alt="Nav Icon"
              />
            </button>
          )}
          {this.state.showNextArrow && (
            <button className="button next" onClick={this.next}>
              <p>Next</p>
              <img
                src={"./assets/left-arrow.png"}
                width="12"
                height="22"
                alt="Nav Icon"
              />
            </button>
          )}
        </div>
      </div>
    );
  }
}
