import './App.css';
import React, {useEffect, useRef, useState} from 'react';
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
import arrow_forward from "./image/arrow_forward.png";
import arrow_back from "./image/arrow_back.png";

function AutoSlide({images, intervalTime}) {
    const slide_img_1 = movieimage_1;
    const slide_img_2 = movieimage_2;
    const slide_img_3 = movieimage_3;
    const slide_img_4 = movieimage_4;
    const slide_img_5 = movieimage_5;
    const slidelist = [
        {
            id: slide_img_1,
            moviename: "엑시트"
        }, {
            id: slide_img_2,
            moviename: "신세계"
        }, {
            id: slide_img_3,
            moviename: "늑대 소션"
        }, {
            id: slide_img_4,
            moviename: "추격자"
        }, {
            id: slide_img_5,
            moviename: "부산행"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        if (!isPaused) {
            const intervalId = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % slidelist.length);
            }, intervalTime);
            return() => clearInterval(intervalId);
        }
    }, [slidelist.length, intervalTime, isPaused]);
    function forward() {}
    return (
        <div>
            <ul
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                <li>
                    <a href="/">
                        <img src={slidelist[currentIndex].id} alt={`slide${currentIndex}`}/>
                    </a>
                </li>
                <li>
                    <p class="text_box">
                        {slidelist[currentIndex].moviename}
                    </p>
                </li>
            </ul>
            <div>
                <ul class="icon">
                    <li onClick={forward()}>
                        <img src={arrow_forward}/>
                    </li>
                    <li onClick={arrow_back}>
                        <img src={arrow_back}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function main() {
    const intervalTime = 2000;
    return (
        <section id="container_1">
            <ul>
                <li>
                    <ul class="movie_img">
                        <li>
                            <AutoSlide intervalTime={intervalTime}/>
                        </li>
                    </ul>
                </li>
                <li class="login"></li>
            </ul>

        </section>
    )
}

export default main;