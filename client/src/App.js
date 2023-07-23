import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Posts from './components/Posts';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

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

    { type: 'img', content: '/assets/aylin_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/aylin_2.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/hannah_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/shray_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/shray_2.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/shray_3.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/shray_4.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/shray_5.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_1.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_2.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_3.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_4.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_5.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_6.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_7.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_8.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_9.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_10.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_11.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_12.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_13.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_14.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_15.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_16.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
    { type: 'img', content: '/assets/twins_17.jpg', name: 'Bada Hyun', profilePicture: '/assets/user.png'},
  ];

  return (
    <div className="App">
      {showConfetti && <img src='/assets/balloons.gif' className='confetti-gif' alt='confetti' />}
      {showConfetti && <img src='/assets/confetti_1.gif' className='confetti-gif' alt='confetti' />}
      <NavBar />
      <SearchBar />
      <div className="posts-container">
        <Posts items={items}/>
      </div>
    </div>
  );
}

export default App;
