import { RoadCreator } from 'features/road-creator';
import logo from 'shared/assets/logo.svg';
import './global.css';
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <RoadCreator />
    </div>
  );
}

export default App;
