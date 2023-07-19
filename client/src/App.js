import './App.css';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Posts from './components/Posts';

function App() {
  const items = [
    { type: 'text', content: 'This is a Happy Birthday Message'},
    { type: 'img', content: 'https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg'},
    { type: 'video', content: 'https://www.youtube.com/watch?v=_z-1fTlSDF0'},
    { type: 'text', content: 'This is a Happy Birthday Message'},
    { type: 'img', content: 'https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg'},
    { type: 'video', content: 'https://www.youtube.com/watch?v=_z-1fTlSDF0'},
    { type: 'text', content: 'This is a Happy Birthday Message'},
    { type: 'img', content: 'https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg'},
    { type: 'video', content: 'https://www.youtube.com/watch?v=_z-1fTlSDF0'},
    { type: 'text', content: 'This is a Happy Birthday Message'},
    { type: 'img', content: 'https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg'},
    { type: 'video', content: 'https://www.youtube.com/watch?v=_z-1fTlSDF0'},
    { type: 'text', content: 'This is a Happy Birthday Message'},
    { type: 'img', content: 'https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg'},
    { type: 'video', content: 'https://www.youtube.com/watch?v=_z-1fTlSDF0'},
    { type: 'text', content: 'This is a Happy Birthday Message'},
    { type: 'img', content: 'https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg'},
    { type: 'video', content: 'https://www.youtube.com/watch?v=_z-1fTlSDF0'},
  ];

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <div className="posts-container">
        <Posts items={items}/>
      </div>
    </div>
  );
}

export default App;
