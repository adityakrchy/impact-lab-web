"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showStatus={false} >
                <div>
                    <img src="/assets/banner1.jpg" />
                </div>
                <div>
                    <img src="/assets/banner2.jpg" />
                </div>
                <div>
                    <img src="/assets/banner3.jpg" />
                </div>
                <div>
                    <img src="/assets/banner4.jpg" />
                </div>
                <div>
                    <img src="/assets/banner5.jpg" />
                </div>
            

            </Carousel>
        );
    }
}

export default DemoCarousel;