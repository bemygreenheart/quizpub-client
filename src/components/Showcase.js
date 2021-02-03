import React from 'react';

import '../style/Showcase.css';
import {Button} from 'antd';

class Showcase extends React.Component{

  render(){
    const style ={background: `url(${process.env.PUBLIC_URL}/static/images/showcase-bg.jpg) center center/cover`,
    }

    return(
      <div className="showcase" style={style}>
        <div className="showcase-content">
          <h2>Way To The Success Starts Here</h2>
          <div className="showcase-buttons">
            <Button type="primary" size="large" shape="round" style={{background : "#002766" , border:"#002766"}}>Explore More</Button>
            <Button type="primary" size="large" shape="round" style={{background : "#002766" , border:"#002766"}}>Create New</Button>
          </div>
        </div>
        </div>
    );
  }
}

export default Showcase;