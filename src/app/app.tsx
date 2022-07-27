import {Counter} from 'features/counter/Counter';
import logo from 'shared/assets/logo.svg';
import './global.css';
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter />
    </div>
  );
}

export default App;
