import logo from './logo.svg';
import './App.css';
import wordData from './components/word';
import Row from './components/row';
import headshot_img from './assets/transparent_headshot.png';

function App() {
  return (
    
    <div>
      <h1>Liam's Wordle</h1>
      <div className='profile-container'>
      <img 
                src={headshot_img} alt='headshot'
            />
      </div>
      <Row wordData={wordData} />
    </div>
  );
}

export default App;
