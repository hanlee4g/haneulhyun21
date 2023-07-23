import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Her.css';
import NavBar from '../components/Navbar';
import Posts from '../components/Posts';

function Her({isHaneul, password}) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedButton, setSelectedButton] = useState('all');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state || !location.state.isAuthenticated) {
      navigate('/');
    }
  }, [navigate, location.state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const items = [
    { type: 'video', content: '/assets/bada.mov', name: 'Bada', profilePicture: '/assets/user.png'},
    { type: 'video', content: '/assets/eileen.mov', name: 'Eileen', profilePicture: '/assets/user.png'},
    { type: 'video', content: '/assets/namoo.mov', name: 'Namoo', profilePicture: '/assets/user.png'},
    { type: 'video', content: '/assets/mel.mov', name: 'Mel', profilePicture: '/assets/user.png'},
    { type: 'video', content: '/assets/mother.mov', name: 'Mom', profilePicture: '/assets/user.png'},
    { type: 'video', content: '/assets/greg.mov', name: 'Greg', profilePicture: '/assets/user.png'},
    { type: 'video', content: '/assets/hannah.mov', name: 'Hannah', profilePicture: '/assets/user.png'},

    { type: 'img', content: '/assets/aylin_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/aylin_2.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/hannah_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/shray_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/shray_2.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/shray_3.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/shray_4.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/shray_5.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_2.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_3.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_4.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_5.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_6.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_7.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_8.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_9.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_10.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_11.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_12.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_13.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_14.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_15.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_16.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},
    { type: 'img', content: '/assets/twins_17.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png', caption: "caption here"},

    { type: 'text', content: 'This is some text from Greg', name: 'Greg', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'This is some text from Hannah', name: 'Hannah', profilePicture: '/assets/user.png'},
  ];

  const getFilteredItems = () => {
    switch (filter) {
      case 'videos':
        return items.filter(item => item.type === 'video');
      case 'images':
        return items.filter(item => item.type === 'img');
      case 'text':
        return items.filter(item => item.type === 'text');
      case 'all':
      default:
        return items;
    }
  }

  const handleButtonClick = (filterType) => { // add this function
    setFilter(filterType);
    setSelectedButton(filterType);
  }

  return (
    <div className="Her">
      {showConfetti && <img src='/assets/balloons.gif' className='confetti-gif' alt='confetti' />}
      {showConfetti && <img src='/assets/confetti_1.gif' className='confetti-gif' alt='confetti' />}
      <NavBar />
      <div className="filter-buttons">
        <button className={selectedButton === 'all' ? 'selected' : ''} onClick={() => handleButtonClick('all')}>All</button>
        <button className={selectedButton === 'videos' ? 'selected' : ''} onClick={() => handleButtonClick('videos')}>Videos</button>
        <button className={selectedButton === 'images' ? 'selected' : ''} onClick={() => handleButtonClick('images')}>Images</button>
        <button className={selectedButton === 'text' ? 'selected' : ''} onClick={() => handleButtonClick('text')}>Text</button>
      </div>
      <div className="posts-container">
        <Posts items={getFilteredItems()}/>
      </div>
    </div>
  );
}

export default Her;
