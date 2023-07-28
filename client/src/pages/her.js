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
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/andrea_v.MOV', name: 'Andrea', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/aylin_i1.JPG', name: 'Aylin', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/aylin_i2.jpg', name: 'Aylin', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/aylin_v.MOV', name: 'Aylin', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/bada_v.mov', name: 'Kayla', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i1.jpeg', name: 'Daeun', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i2.jpeg', name: 'Daeun', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i3.jpeg', name: 'Daeun', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i4.jpeg', name: 'Daeun', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/daeun_v.mov', name: 'Daeun', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/daeun_v1.mov', name: 'Daeun', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i1.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i2.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i3.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i4.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i5.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i6.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/dianne_v.MOV', name: 'Dianne', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i1.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i2.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i3.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i4.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/eileen_v.mov', name: 'Eileen', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/eric_v.MOV', name: 'Eric', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/greg_v.mov', name: 'Greg', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i1.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i2.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i3.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i4.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i5.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i6.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i7.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v.mov', name: 'Han', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v1.mov', name: 'Han', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v2.mov', name: 'Han', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v3.mov', name: 'Han', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/hannah_i1.jpg', name: 'Hannah', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/hannah_v.mov', name: 'Hannah', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/john_v.mov', name: 'John', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/marcus_i1.JPG', name: 'Marcus', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/mel_v.mov', name: 'Mel', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/mom_v.mov', name: 'Mom', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/namoo_i1.jpeg', name: 'Namoo', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/namoo_i2.jpeg', name: 'Namoo', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/namoo_v.mov', name: 'Namoo', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i1.jpg', name: 'Shray', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i2.jpg', name: 'Shray', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i3.jpg', name: 'Shray', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i4.jpg', name: 'Shray', profilePicture: '/assets/user.png', caption: "caption"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/skye_i1.JPG', name: 'Skye', profilePicture: '/assets/user.png', caption: "caption"},


    { type: 'text', content: 'Happy Birthday Elizabeth! Hope you have a great 21 and thanks for being such a good friend to me all these years. Cant wait to celebrate with you in Chicago (probably Texas)', name: 'Marcus', profilePicture: '/assets/user.png'},
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
