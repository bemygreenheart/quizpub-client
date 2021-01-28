import React from 'react';
import Showcase from '../Showcase';
import LandingInfo from '../utils/LandingInfo';
import Categories from '../utils/Categories';
import LandingCarusel from '../LandingCarusel';
import MainFooter from '../MainFooter';

class LandingPage extends React.Component{

  render(){
    const first_title = "You bring the brains, we'll provide you the rest";
    const first_text = "Learn and prepare for your exams using flashcards, quizes and games."+
    "Save your favorite ones, add to your catalogs and come back later for relearning. All you have to do"+
    "is use sign for completely free and learn in an interesting way. Lots of professional tutors and ametour "+
    "create new recources every day, making it even better";

    const second_title = "Create your work once and share to millions";
    const second_text = "You can create a classroom and share your works there or publicly. "+
    "Quizpub can efficiently serve you both as a teacher and an examiner. For teachers it can help"+
    "to switch from boring old method of teaching to a brand new technologilac one without any hardships."+
    "Get feed and give feedback to your audience instantly with the help of comments and marking system"+
    "And this is not the end of our services our new Live Quiz option is gonna change the concept of old esting."+
    "Be at the ready for it!"

    return(
      <div>
        <Showcase/>
        <div className="container">
        <LandingInfo title={first_title} text={first_text} image="brain" />
        <LandingInfo title={second_title} text={second_text} image="enstain" />
        <LandingCarusel/>
        <Categories/>
        </div>
        <MainFooter/>
      </div>
    );
  }
}

export default LandingPage;
