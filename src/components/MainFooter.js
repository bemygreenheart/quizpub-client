import React from 'react';
import {Link} from 'react-router-dom';

import '../style/MainFooter.css';

class MainFooter extends React.Component{

  render(){
    return(
      <div className="main-footer">
        <div className="container">
          <div className="main-footer-content">

            <div className="main-footer-column">
              <h6>Social Media</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Telegram</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Facebook</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Youtube</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Instagram</Link>
              </div>
            </div>

            <div className="main-footer-column">
              <h6>Contact Us</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Contact</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Email</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Phone</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Newsfeed</Link>
              </div>
            </div>

            <div className="main-footer-column">
              <h6>About Us</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">About QuizPub</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Blog</Link>
              </div>
            </div>

            <div className="main-footer-column">
              <h6>Join</h6>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">SignIn</Link>
              </div>
              <div className="main-footer-item">
                <Link to="/" className="main-link small">Login</Link>
              </div>
            </div>

          </div>
          <div className="footer-copyright">
            <div>
              Copyright &copy; 2019-{new Date().getFullYear()} SCHOP
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainFooter;