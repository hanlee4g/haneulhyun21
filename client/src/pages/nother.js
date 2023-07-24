import React from 'react';
import NavBar from '../components/Navbar';
import '../styles/Nother.css';

const NotHer = () => {
  return (
    <div className='NotHer'>
      <NavBar />

      <div className='section' id='preview-section'>
        <h2>Haneul's View: </h2>
        <img src='../assets/preview.png' alt='Preview' />
        <p>
            Haneul will see a feed of videos, images, messages, and gift cards from her family and friends.
            Since she is abroad and away from home for her birthday, the objective is to bring all of her loved ones
            to her, like a virtual surprise birthday party. The more videos, images, messages, and gift cards that people
            post, the better the party! If you would would like to post more content or send a birthday gift card, please
            see the sections below! I will send the link to Haneul on her birthday, please keep this a secret until then. Thank you!
        </p>
      </div>
      

      <div className='main-content'>
        <div className='section' id='left-section'>
          <h2>Create a Post</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIBxaHK-1d9y8jSQ68QMQyr30OAKigEuXo3fFrYaQYi4O5Nw/viewform?embedded=true" width="640" height="1012" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

        <div className='section' id='right-section'>
          <h2>Send Haneul a Gift</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScT6gbx1JMf6wIdRJ06OKh6u_0YZ3tr4FDDj0pgLGo43Vd47A/viewform?embedded=true" width="640" height="1012" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
  );
};

export default NotHer;
