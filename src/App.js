import enPassantLogo from './img/45vdsbn26opa1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='logo_wrapper'>
        <img src={enPassantLogo} alt="Google EnPassant Logo" className='logo'/>
        <h1>Wonder how did your pawn just disappear? You're in a right place!</h1>
        <a href='https://www.google.com/search?q=en+passant'><button>Google En Passant</button></a>
      </div>
    </div>
  );
}

export default App;
