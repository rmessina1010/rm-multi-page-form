import logo from './logo.svg';
import './App.css';
import {TheForm} from './components/components/sample';
function App() {
  return (
    <div className="App">
      <TheForm pages={ ['hi','otter!','bear', 'rabbit']}/>
    </div>
  );
}

export default App;
