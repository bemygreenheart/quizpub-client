import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import CustomSider from './CustomSider';
import LandingPage from './pages/LandingPage';
import 'antd/dist/antd.css';
import '../style/App.css';

class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
          <CustomSider/>
          <Route path="/" component={LandingPage}/>
        </BrowserRouter>
    );
  }
}

export default App;