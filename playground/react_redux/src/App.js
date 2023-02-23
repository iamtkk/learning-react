import logo from './logo.svg';
import './App.css';
import AddNumber from './components/AddNumbers';

function App() {
  let state = { number: 0 };
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumber />
    </div>
  );
}

export default App;
