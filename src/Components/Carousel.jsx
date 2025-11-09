import React from 'react';
import { Carousel } from "flowbite-react";
const CarouselComponent = () => {

  const images = [
    "https://ineducationonline.org/wp-content/uploads/2023/01/How-hobbies-are-important-in-a-persons-life.png",
    "https://www.self.inc/info/img/post/spend-favorite-hobbies/spend-favorite-hobbies-header.jpg",
    "https://labourlawadvisor.in/blog/wp-content/uploads/2019/04/Horizontal-Thumbnail-1.jpg"]
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel >
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;