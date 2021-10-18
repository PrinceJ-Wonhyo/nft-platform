import React, { Component, useState } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class ListingGallery extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      };
      return (
        <>
          <Slider {...settings}>
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </Slider>
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
              <img src={`./assets/NFT_Market_item0${i + 1}.png`} />
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
        afterChange: () => (this.setState = () => ({ paused: false })),
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img
                src={"./assets/NFT_Market_item01.png"}
                alt=""
                width="550"
                height="600"
              />
            </div>
            <div>
              <img
                src={"./assets/NFT_Market_item02.png"}
                alt=""
                width="550"
                height="600"
              />
            </div>
            <div>
              <img
                src={"./assets/NFT_Market_item03.png"}
                alt=""
                width="550"
                height="600"
              />
            </div>
            <div>
              <img
                src={"./assets/NFT_Market_item04.png"}
                alt=""
                width="550"
                height="600"
              />
            </div>
            <div>
              <img
                src={"./assets/NFT_Market_item05.png"}
                alt=""
                width="450"
                height="500"
              />
            </div>
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
            width="36"
            height="36"
            style={{ color: "white" }}
          />
          SHARE
        </Link>
        <p class="listing-date">May 16 2021</p>
        <h3>GANG HO DONG</h3>
        <p>Zombie Apocalypse</p>
        <h4>RARE</h4>
        <h4>#495/499</h4>
        <p>EXPLORE MOMENT</p>
        <small>Notable Sale $19.99 / Serial #1</small>
        <small>Officially licensed product of NFT KOREA</small>
      </div>
    );
  };