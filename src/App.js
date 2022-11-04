import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player/vimeo';

function App() {
  return (
    <div>
      <h1>Course Title</h1>
      <h2>Course Player</h2>
      <ReactPlayer url='https://vimeo.com/766260846' controls='true'/>
      <h2>Play List</h2>
    </div>
  );
}

export default App;
