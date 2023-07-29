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
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/bada_v.mov', name: 'Kayla', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i1.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "Elizabeth with panda head on during Halloween in HS"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i2.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "Happy Birthday!"},
    { type: 'text', content: 'Fave memory: #CHEESEGANG literally best memory ever even though we thought we were literally gonna die!!! Your driving skills were literally top tier. I cannot believe that we were so crazy in high school and that we thought it would be a good idea to throw cheese at peoples cars... especially the fact you went right up to that truck. Also, I love how we just casually went to Freddys right after like no big deal.', name: 'Dianne', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/skye_v.MOV', name: 'Skye', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i4.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "Ice skating ⛸"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i1.jpeg', name: 'Daeun', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'If Haneul were an animal... She would be a whale 🐳😂. Jk prolly a polar bear ', name: 'Marcus', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i2.jpg', name: 'Shray', profilePicture: '/assets/user.png', caption: "asking a random person for birthday cake at banana"},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v.mov', name: 'Han', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i4.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "Karaoke—our fave"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i7.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "Who rocked it better?"},
    { type: 'text', content: 'My favorite thing about Haneul is her humor and laugh', name: 'Kayla', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'I am looking forward to sitting down over a coffee (latte for you and americano for me) and talking about anything and everything, just being in your company.', name: 'Han', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/aylin_v.MOV', name: 'Aylin', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i3.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "Mad at school LOL"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/hannah_i1.jpg', name: 'Hannah', profilePicture: '/assets/user.png', caption: "Dillo day!!!"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i3.jpg', name: 'Shray', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'Favorite thing about Haneul: her boldness', name: 'Eileen', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/daeun_v.mov', name: 'Daeun', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i5.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "When we got paparazzied at a party"},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v2.mov', name: 'Han', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/skye_i2.JPG', name: 'Skye', profilePicture: '/assets/user.png', caption: "your best look"},
    {type: 'gift', title: '$25 Aerie', content: 'https://storage.googleapis.com/haneul21assets/aerie_card.png', name: 'Skye', profilePicture: '/assets/user.png' },

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/eric_v.MOV', name: 'Eric', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'Looking forward to: Catching up with you!!! I cannot believe it has been so long since Ive seen you. There is much to talk about and even more Rumple to drink.', name: 'Dianne', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i2.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "Bobs burger halloween 🎃"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/marcus_i1.JPG', name: 'Marcus', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/dianne_v.MOV', name: 'Dianne', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i4.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "POV: people screaming in the background"},
    { type: 'text', content: 'I look forward to partying with her and will try to get her to rave sometime.', name: 'Marcus', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i4.jpeg', name: 'Daeun', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'If Haneul were an animal... she would be a lion. But the kind of lion you imagine as a kid, not the kind that eats people.', name: 'Han', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/hannah_v.mov', name: 'Hannah', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'Happy Birthday Elizabeth! Hope you have a great 21 and thanks for being such a good friend to me all these years. Cant wait to celebrate with you in Chicago (probably Texas)', name: 'Marcus', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/aylin_i2.jpg', name: 'Aylin', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/namoo_i2.jpeg', name: 'Namoo', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'I have so many amazing memories of you, and so many of them sound so mundane — long nights we spent talking about our lives in Willard, procrastinating homework by talking about the state of the world, studying together in Starbucks. Every time we hang out Im reminded how much I love your company.', name: 'Skye', profilePicture: '/assets/user.png'},
    {type: 'gift', title: '$15 Amazon', content: 'https://storage.googleapis.com/haneul21assets/amazon_card.png', name: 'Shray', profilePicture: '/assets/user.png' },

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/mom_v.mov', name: 'Mom', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i3.jpeg', name: 'Daeun', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i3.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "Helping me test my paper bags. You look so excited haha!"},
    { type: 'text', content: 'My favorite thing about her is that’s she’s a true and honest friend.', name: 'Marcus', profilePicture: '/assets/user.png'},
    { type: 'text', content: '누나 is the best combination of hard working and genius.', name: 'Namoo', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/mel_v.mov', name: 'Mel', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i4.jpg', name: 'Shray', profilePicture: '/assets/user.png', caption: "being public nuisances at swim formal"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i2.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "Friendsgiving face swap😂"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i3.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "Summer 2020 when we’d swim all the time"},
    { type: 'text', content: 'If Haneul were an animal: A honey badger since theyre though and ferocious but very cute HAHA', name: 'Eileen', profilePicture: '/assets/user.png'},
    {type: 'gift', title: '$15 Starbucks', content: 'https://storage.googleapis.com/haneul21assets/starbucks_card.png', name: 'Dianne', profilePicture: '/assets/user.png' },

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/andrea_v.MOV', name: 'Andrea', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'If Haneul were an animal...  하늘이언니 is a lion. Her personality reminds me of a lion. (Appearance-wise/second choice for personality would be a bear)', name: 'Kayla', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/eileen_i1.jpg', name: 'Eileen', profilePicture: '/assets/user.png', caption: "Hangouts w/ Elizabeth 🤣"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/namoo_i1.jpeg', name: 'Namoo', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'I don’t have only one favorite memory about you Liz, you’re one of the people that made my entire exchange student year so amazing  and every time I think of those days I just think about you: all our drives around the neighborhood, our trips to Starbucks or our long philosophic chats about life hahaha :) I will always remember our connection and I always felt like I could be myself with you <333 so I’m very grateful for that… I obviously remember many other things hahaha but some of them  are not meant to be shared ', name: 'Mel', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/john_v.mov', name: 'John', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i6.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "Head out the sunroof"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i6.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "You at your cutest imo <3"},
    { type: 'text', content: 'My favorite memory of Haneul... there are too many (cheese car chase, Torchys chips & salsa) but Ill share one of the most memorable. At the A&M swim meet where we roomed with Mia. We were playing truth or dare, the night was winding down, and we thought the guys rooming near us were cute LOL. We then dared you to ask the room across from us where the ice machine was. Obviously you accepted the challenge. Dianne, Mia, and I wanted to hear the interaction and see it through the peephole, so we fought each other at the door. I distinctly remember the door being cracked open, and we were giggling so hard as you were talking and slamming the door shut LOLL', name: 'Eileen', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v1.mov', name: 'Han', profilePicture: '/assets/user.png', caption: "Do you remember when we filmed this?"},
    {type: 'gift', title: '$25 Amazon', content: 'https://storage.googleapis.com/haneul21assets/amazon_card.png', name: 'Andrea', profilePicture: '/assets/user.png' },

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/greg_v.mov', name: 'Greg', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'I cant wait to spend time with you when you return from your travels!', name: 'Skye', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/aylin_i1.JPG', name: 'Aylin', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'I am looking forward to spending time with Haneul at home', name: 'Kayla', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/shray_i1.jpg', name: 'Shray', profilePicture: '/assets/user.png', caption: "iconic .5 that she explicitly told me not to tag her in"},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/eileen_v.mov', name: 'Eileen', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/daeun_i2.jpeg', name: 'Daeun', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/skye_i1.JPG', name: 'Skye', profilePicture: '/assets/user.png', caption: "one of our first nights in Willard!"},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/han_i1.jpg', name: 'Han', profilePicture: '/assets/user.png', caption: "Please don't kill me for this picture :)"},
    { type: 'text', content: 'Something I look forward doing/seeing w/ Haneul: Taking her around Austin more, showing her my favorite bars/dive bars in Austin, and EATING', name: 'Eileen', profilePicture: '/assets/user.png'},
    {type: 'gift', title: '$100 Target', content: 'https://storage.googleapis.com/haneul21assets/target_card.png', name: 'Daeuns Mom', profilePicture: '/assets/user.png' },

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/namoo_v.mov', name: 'Namoo', profilePicture: '/assets/user.png'},
    { type: 'text', content: 'My favorite memories with her involved going on some degen adventures. A specific adventure that comes to mind is when we found the gazebo.', name: 'Marcus', profilePicture: '/assets/user.png'},
    { type: 'img', content: 'https://storage.googleapis.com/haneul21assets/dianne_i5.jpg', name: 'Dianne', profilePicture: '/assets/user.png', caption: "Eileen and Liz at grapevine lake during covid"},
    { type: 'text', content: 'Spending a month in Athens together and having the craziest experiences was something Ill never forget. From letting a random British woman drive us back to the city to putting our hands in the Syntagma square fountain, theres no one else Id rather have done it all with. One day well go back and break into the Panathenaic stadium at 4 am again -- but until then, happy birthday and I hope you have the best day ever <3', name: 'Shray', profilePicture: '/assets/user.png'},
    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/daeun_v1.mov', name: 'Daeun', profilePicture: '/assets/user.png'},

    { type: 'video', content: 'https://storage.googleapis.com/haneul21assets/han_v3.mov', name: 'Han', profilePicture: '/assets/user.png', caption: "HAPPY BIRTHDAY!"},
  ];

  const getFilteredItems = () => {
    switch (filter) {
      case 'videos':
        return items.filter(item => item.type === 'video');
      case 'images':
        return items.filter(item => item.type === 'img');
      case 'text':
        return items.filter(item => item.type === 'text');
      case 'gift':
        return items.filter(item => item.type === 'gift');
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
        <button className={selectedButton === 'text' ? 'selected' : ''} onClick={() => handleButtonClick('gift')}>Gifts</button>
      </div>
      <div className="posts-container">
        <Posts items={getFilteredItems()}/>
      </div>
    </div>
  );
}

export default Her;
