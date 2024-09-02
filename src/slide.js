import './App.css';
import { useState, useEffect } from 'react';
import movieimage_1 from "./image/movie_1.jpeg";
import movieimage_2 from "./image/movie_2.jpeg";
import movieimage_3 from "./image/movie_3.jpeg";
import movieimage_4 from "./image/movie_4.jpeg";
import movieimage_5 from "./image/movie_5.jpeg";
import movieimage_6 from "./image/movie_6.jpeg";
import kseriseimage_1 from "./image/k-series_1.jpeg";
import kseriseimage_2 from "./image/k-series_2.jpeg";
import kseriseimage_3 from "./image/k-series_3.jpeg";
import kseriseimage_4 from "./image/k-series_4.jpg";
import animation_1 from "./image/animation_1.jpeg";
import animation_2 from "./image/animation_2.jpeg";
import animation_3 from "./image/animation_3.jpeg";
import animation_4 from "./image/animation_4.jpeg";
import animation_5 from "./image/animation_5.jpeg";
import animation_6 from "./image/animation_6.jpeg";
import animation_7 from "./image/animation_7.jpeg";
import eseries_1 from "./image/e-series_1.jpeg";
import eseries_2 from "./image/e-series_2.jpeg";
import eseries_3 from "./image/e-series_3.jpeg";
import eseries_4 from "./image/e-series_4.jpeg";
import eseries_5 from "./image/e-series_5.jpeg";
import eseries_6 from "./image/e-series_6.jpeg";
import eseries_7 from "./image/e-series_7.jpeg";
import eseries_8 from "./image/e-series_8.jpeg";



function AutoSlide({ images, intervalTime }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, intervalTime);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, images.length, intervalTime]);
  
    return (
      <div>
        <img src={images[currentIndex]} alt={`slide${currentIndex}`} />
      </div>
    );
  }

// function Slide(){
//     const slide_img_1 = document.querySelector(".movie_img > li > ul:nth-child(1)");
//     const slide_img_2 = document.querySelector(".movie_img > li > ul:nth-child(2)");
//     const slide_img_3 = document.querySelector(".movie_img > li > ul:nth-child(3)");
//     const slide_img_4 = document.querySelector(".movie_img > li > ul:nth-child(4)");
//     const slide_img_5 = document.querySelector(".movie_img > li > ul:nth-child(5)");
//     const mainslideimage = [slide_img_1 , slide_img_2 , slide_img_3 , slide_img_4 , slide_img_5];
//     const FIRST_SLIDE_INDEX = 0; 
//     const LAST_SLIDE_INDEX = mainslideimage.length - 1;
//     const MOVE_SLIDE_INDEX = 1;

//     if(mainslideimage.indexOf == 0){

//     }
   
// }