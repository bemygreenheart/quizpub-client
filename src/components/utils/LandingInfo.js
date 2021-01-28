import React from 'react';

import '../../style/LandingInfo.css';

class LandingInfo extends React.Component{
  render(){
    return(
      <div className="landing-info">
        <div className="landing-info-content">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default LandingInfo;