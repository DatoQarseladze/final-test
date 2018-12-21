import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../css/slider.css';

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel effect="scrollx" autoplay arrows={true}>

                    <div>
                        <img src={"/img/slider1.jpg"} className="slider" />
                    </div>

                     <div>
                        <img src={"/img/slider2.jpg"} className="slider" />
                    </div>

                </Carousel>

            </div>
        );
    }
}

export default Slider;