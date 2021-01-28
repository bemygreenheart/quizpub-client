import React from 'react';

import '../../style/CarouselItem.css'
class CarouselItem extends React.Component{
  render(){
    return(
      <div className="carousel-item">
        <img src={process.env.PUBLIC_URL + `/images/${this.props.image}.jpg`}></img>
        <div className="carousel-item-content">
          <h3>QUIZPUB IS FOR</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default CarouselItem;