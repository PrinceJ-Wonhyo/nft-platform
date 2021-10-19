import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";

const itemProps = [
  {
    id: 0,
    src: "./assets/NFTKOREA.png",
    alt: "Mock Sample Images",
    width: 450,
    height: 500,
  },
  {
    id: 1,
    src: "./assets/DZCUR-KR-01.png",
    alt: "Mock Sample Images",
    width: 450,
    height: 500,
  },
  {
    id: 2,
    src: "./assets/DZCN-KR-07.png",
    alt: "Mock Sample Images",
    width: 450,
    height: 500,
  },
  {
    id: 3,
    src: "./assets/DZCAR-01.png",
    alt: "Mock Sample Images",
    width: 450,
    height: 500,
  },
  {
    id: 4,
    src: "./assets/DZCN-KR-01.png",
    alt: "Mock Sample Images",
    width: 450,
    height: 500,
  },
];
export default class ListingGallery extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    index: 0,
    showPrevArrow: false,
    showNextArrow: itemProps.length > 1,
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
      afterChange: () => this.setState((id) => ({ index: id })),
      beforeChange: (prev, next) =>
        this.setState(
          {
            showPrevArrow: next > 0,
            showNextArrow: next < itemProps.length - 1,
          },
          console.log(prev)
        ),
    };
    return (
      <>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {itemProps.map(({ id }) => (
            <Listing key={id} />
          ))}
          {/*<video className="video-container video-container-overlay" autoPlay={false} loop={true} muted={true} data-reactid=".0.1.0.0">
  <source type="video/mp4" data-reactid=".0.1.0.0.0" src="./assets/NFT_Video.mp4?" />
</video>*/}
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
      </>
    );
  }
}

const Listing = () => {
  return (
    <div className="listing">
      <NFTGallery />
      <NFTItem />
    </div>
  );
};

class NFTGallery extends Component {
  state = {
    paused: false,
  };
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={`./assets/NFT_Market_item0${i + 1}.png`} alt="Image Container for Thumbnail Images" />
          </a>
        );
      },
      dots: true,
      fade: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      className: "active-image",
    };
    return (
      <div>
        <Slider {...settings}>
          {itemProps.map(({ id, src, alt, width, height }) => (
            <div key={id}>
              <img src={src} alt={alt} width={width} height={height} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const NFTItem = () => {
  return (
    <div className="listing-copy">
      <Link className="share-link" exact to="/">
        <img
          src="./assets/share.png"
          width="12"
          height="12"
          alt=""
        />
        SHARE
      </Link>
      <header>
        <p class="listing-date">May 16 2021</p>
        <h2>GANG HO DONG</h2>
        <p>Zombie Apocalypse</p>
      </header>
      <div className="listing-status">
        <h4>RARE</h4>
        <h4>#495/499</h4>
      </div>
      <footer>
        <Link className="explore-btn" exact to="/">
          EXPLORE MOMENT
        </Link>
        <small>Notable Sale $19.99 / Serial #1</small>
        <small>Officially licensed product of NFT KOREA</small>
      </footer>
    </div>
  );
};
