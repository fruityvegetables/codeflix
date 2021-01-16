import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>HEllo and LET'S MAKE A NETFLIX RIPOFF!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
