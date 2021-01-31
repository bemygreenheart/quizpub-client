import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import CustomSider from './CustomSider';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import 'antd/dist/antd.css';
import '../style/App.css';

class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
          <CustomSider/>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/auth/" component={LoginPage}/>
        </BrowserRouter>
    );
  }
}

export default App;