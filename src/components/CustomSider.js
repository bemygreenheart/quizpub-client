import React from 'react';

import '../style/CustomSider.css';

import {UserOutlined, PlusOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined, MessageOutlined, InfoOutlined} from '@ant-design/icons';

class CustomSider extends React.Component{

  state = {folded : true}
  renderFoldButton(folded){
    if(folded){
      return <MenuUnfoldOutlined/>;
    }else{
      return <MenuFoldOutlined/>;
    }
  }

  onFoldedClicked=()=>{
    const old_value = this.state.folded;
    this.setState({folded : !old_value})
    console.log(this.state.folded)
  }

  render(){
    const foldedStyle = this.state.folded ? '' : 'folded';
    return(
        <div className={`custom-sider-wrapper ${foldedStyle}`}>
        <div className="custom-sider">
          <div className="custom-sider-item">
            <div className="sider-item-icon">
              <UserOutlined/>
            </div>
            <div className="sider-item-text">
              Profile
            </div>
          </div>
          <div className="custom-sider-item">
            <div className="sider-item-icon">
              <PlusOutlined/>
            </div>
            <div className="sider-item-text">
              Create Now
            </div>
          </div>
          <div className="custom-sider-item">
            <div className="sider-item-icon">
              <MessageOutlined/>
            </div>
            <div className="sider-item-text">
              Constact
            </div>
          </div>
          <div className="custom-sider-item">
            <div className="sider-item-icon">
              <InfoOutlined/>
            </div>
            <div className="sider-item-text">
              About Us
            </div>
          </div>

          <div className="custom-sider-button" onClick={this.onFoldedClicked}>
            {this.renderFoldButton(this.state.folded)}
          </div>
        </div>

      </div>
    );
  }
}

export default CustomSider;