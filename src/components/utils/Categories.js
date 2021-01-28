import React from 'react';
import {Row, Col} from 'antd';

import '../../style/Categories.css';

class Categories extends React.Component{
    render(){
    return(
      <div className="landing-page-categories">
        <h2>Choose category</h2>
        <Row gutter={16}>
          <Col xs={24} md={12} lg={6}>
            <div className="landing-page-category">
            <img src={`${process.env.PUBLIC_URL}/images/prog.jpg`} alt="programming" />
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="landing-page-category">
            <img src={`${process.env.PUBLIC_URL}/images/math.jpg`} alt="mathematics" />
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="landing-page-category">
              <img src={`${process.env.PUBLIC_URL}/images/tech.jpg`} alt="technology" />
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="landing-page-category">
              <img src={`${process.env.PUBLIC_URL}/images/others.jpg`} alt="others" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Categories;