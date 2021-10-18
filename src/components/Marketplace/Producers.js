import React, { Component, useState } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class Producers extends Component {
  render() {
    const producers = [
      {
        id: 1,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 2,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 3,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 4,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 5,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 6,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 7,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 8,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 9,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
      {
        id: 10,
        profileImg: "./assets/Profile_img.png",
        name: "First Last",
        user: "@username",
        verified: "./assets/Verified.png",
        rating: 8,
      },
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          {producers.map(({ profileImg, name, user, verified, rating, id }) => (
            <div className="producer-profiles" key={id}>
              <img src={profileImg} alt="" width="74" height="74" />
              <p>{name}</p>
              <p>
                {user}
                <img src={verified} />
              </p>
              <small>Credit {rating}</small>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
