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




function main() {
   
    const mainslideimage = [movieimage_1 , movieimage_2 , kseriseimage_1 , kseriseimage_2 , movieimage_4];

    return (
        <section id="container_1">
            <ul>
                <li>
                    <ul class="movie_img">
                        <li>
                            <ul>
                                <li>
                                    <a href="/" alt="main_image">
                                        <img src={movieimage_1}/>
                                    </a>
                                </li>
                                <li class="text_box">
                                    <p>
                                        dasd
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="/" alt="main_image">
                                        <img src={movieimage_2}/>
                                    </a>
                                </li>
                                <li class="text_box">
                                    <p>
                                        asd
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>

                                    <a href="/" alt="main_image">
                                        <img src={kseriseimage_1}/>
                                    </a>
                                </li>
                                <li class="text_box">
                                    <p>sadasd</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="/" alt="main_image">
                                        <img src={kseriseimage_2}/>
                                    </a>
                                </li>
                                <li class="text_box">
                                    <p>asdas</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="/" alt="main_image">
                                        <img src={movieimage_4}/>
                                    </a>
                                </li>
                                <li class="text_box">
                                    <p>asd</p>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="login"></li>
            </ul>
        </section>
    )
}

export default main;