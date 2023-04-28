import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import CookingImg from './Cooking.jpg';

function App() {
  return (
    <body>
      <header>
        <h1>ravenous</h1>
      </header>
      <div id='searchImage' style={{backgroundImage: `url(${CookingImg})`}}>
        <div id='rating'>
            <h6>Best<br/>Match</h6>
            <h6>Highest<br/>Rated</h6>
            <h6>Most<br/>Reviewed</h6>
        </div>
        <div id='line'></div>
        <div id='searchBar'>
          <input type='text' placeholder='Search Businesses'/>
          <input type='text' placeholder='Where?'/>
        </div>
      </div>
      <BusinessList/>
    </body>
  );
}

export default App;
