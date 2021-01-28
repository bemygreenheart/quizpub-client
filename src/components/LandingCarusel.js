import React from 'react';
import {Row, Col, Carousel, Button} from 'antd';
import CarouselItem from './utils/CarouselItem';

import '../style/LandingCarousel.css';

class LandingCarusel extends React.Component{
  render(){
    return(
      <div className="landing-carousel">
        <div className="landing-carousel-content">
          <Row gutter={16}>
            <Col sm={24} md={10}>
              <h2>Be a better version of yourself</h2>
              <p>Do not try too hard, but learn smart with us and make future</p>
              <Button size="large" style={{backgroundColor: "#f4f4f4", paddingLeft:"30px",  paddingRight:"30px", marginBottom: "10px"}}>Start Learning</Button>
            </Col>
            <Col sm={24} md={14}>
              <Carousel autoplay>
                <CarouselItem image ="1" text="'I should go through the hardship for future' - students"/>
                <CarouselItem image ="2" text="'I should go through the hardship for future' - students"/>
                <CarouselItem image ="3" text="'I should go through the hardship for future' - students"/>
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LandingCarusel;