import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-100">
                    <img
                        src="https://ineducationonline.org/wp-content/uploads/2023/01/How-hobbies-are-important-in-a-persons-life.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-100">
                    <img
                        src="https://www.self.inc/info/img/post/spend-favorite-hobbies/spend-favorite-hobbies-header.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-100">
                    <img
                        src="https://labourlawadvisor.in/blog/wp-content/uploads/2019/04/Horizontal-Thumbnail-1.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-100">
                    <img
                        src="https://tutorextra.co.uk/public/uploads/files/Untitw5434led.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;