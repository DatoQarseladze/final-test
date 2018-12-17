import React, { Component } from "react";
// import chat from "./image/chat.jpg";
// import Chat from "./Chat";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ["/img/slider1.jpg", "/img/slider2.jpg"],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider-parent">
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 1s"
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "70% 50%"
  };

  return <div className="slide" style={styles} />;
};

// const LeftArrow = props => {
//   return (
//     <div className="backArrow arrow" onClick={props.goToPrevSlide}>
//       <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
//     </div>
//   );
// };

// const RightArrow = props => {
//   return (
//     <div className="nextArrow arrow" onClick={props.goToNextSlide}>
//       <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
//     </div>
//   );
// };
