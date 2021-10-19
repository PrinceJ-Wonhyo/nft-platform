import React, { Component } from "react";

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
      slidesToShow: 9,
      slidesToScroll: 3,
    };
    return (
      <div className="producers">
        <h3>CERTIFIED PRODUCERS</h3>
        <Slider {...settings}>
          {producers.map(({ profileImg, name, user, verified, rating, id }) => (
            <Link exact to="/" key={id}>
              <div className="producer-profiles">
                <img src={profileImg} alt="" width="56" height="56" />
                <p className="producer-name">{name}</p>
                <div className="user-status">
                  <p>{user}</p>
                  <img src={verified} alt="" width="12" height="12" />
                </div>
                <small>Credit {rating}</small>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}
