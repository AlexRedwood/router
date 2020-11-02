import React from "react";
import items from "../items";

const Welcome = () => {
  function getAllImages() {
    // Get types (weapons + armor)
    let types = Object.keys(items);

    // Get each category in weapon and type to one array
    let categories = [];
    types.forEach((type) => {
      categories.push(...Object.keys(items[type]));
    });

    // Push all images to one array
    let allImages = [];
    types.forEach((type) => {
      categories.forEach((category) => {
        if (items[type][category]) {
          for (let i = 0; i < items[type][category].length; i++) {
            allImages.push(items[type][category][i].image);
          }
        }
      });
    });
    return allImages;
  }

  function getRandomImage(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
  }

  return (
    <div className="container-fluid welcome justify-content-center">
      <h1 className="text-center my-3">
        Welcome to The Crusade Calls shop page!
      </h1>

      <div
        id="carousel"
        className="my-5 mx-auto carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block"
              src={getRandomImage(getAllImages())}
              alt="First slide"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              className="d-block"
              src={getRandomImage(getAllImages())}
              alt="Second slide"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              className="d-block"
              src={getRandomImage(getAllImages())}
              alt="Third slide"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              className="d-block"
              src={getRandomImage(getAllImages())}
              alt="Third slide"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              className="d-block"
              src={getRandomImage(getAllImages())}
              alt="Third slide"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
