import './App.css';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Posts from './components/Posts';

function App() {
  const items = [
    { type: 'video', content: '/assets/bada.mov'},
    { type: 'video', content: '/assets/namoo.mov'},
    { type: 'video', content: '/assets/mother.mov'},
    { type: 'video', content: '/assets/eileen.mov'},
    { type: 'video', content: '/assets/greg.mov'},
    { type: 'video', content: '/assets/hannah.mov'},
    { type: 'video', content: '/assets/mel.mov'},

    { type: 'img', content: '/assets/aylin_1.jpg'},
    { type: 'img', content: '/assets/aylin_2.jpg'},
    { type: 'img', content: '/assets/hannah_1.jpg'},
    { type: 'img', content: '/assets/shray_1.jpg'},
    { type: 'img', content: '/assets/shray_2.jpg'},
    { type: 'img', content: '/assets/shray_3.jpg'},
    { type: 'img', content: '/assets/shray_4.jpg'},
    { type: 'img', content: '/assets/shray_5.jpg'},
    { type: 'img', content: '/assets/twins_1.jpg'},
    { type: 'img', content: '/assets/twins_2.jpg'},
    { type: 'img', content: '/assets/twins_3.jpg'},
    { type: 'img', content: '/assets/twins_4.jpg'},
    { type: 'img', content: '/assets/twins_5.jpg'},
    { type: 'img', content: '/assets/twins_6.jpg'},
    { type: 'img', content: '/assets/twins_7.jpg'},
    { type: 'img', content: '/assets/twins_8.jpg'},
    { type: 'img', content: '/assets/twins_9.jpg'},
    { type: 'img', content: '/assets/twins_10.jpg'},
    { type: 'img', content: '/assets/twins_11.jpg'},
    { type: 'img', content: '/assets/twins_12.jpg'},
    { type: 'img', content: '/assets/twins_13.jpg'},
    { type: 'img', content: '/assets/twins_14.jpg'},
    { type: 'img', content: '/assets/twins_15.jpg'},
    { type: 'img', content: '/assets/twins_16.jpg'},
    { type: 'img', content: '/assets/twins_17.jpg'},
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
