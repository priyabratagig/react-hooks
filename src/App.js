import './App.css';
import StateCounterClass from './Components/useState/StateCounterClass'
import StateCounterFunctional from './Components/useState/StateCounterFunctional';
function App() {
  return (
    <div className="App">
      <StateCounterClass />
      <StateCounterFunctional />
    </div>
  );
}

export default App;
