import './App.css';
import questions from '../src/assets/pytania_egzaminacyjne.json';

function App() {

  return (
    <div className="App">
      <header className="App-header">
  {questions[0].pytanie}
      </header>
    </div>
  );
}

export default App;
