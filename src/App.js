import './App.css';
import StateCounterClass from './Components/useState/StateCounterClass'
import StateCounterFunctional from './Components/useState/StateCounterFunctional';
// only call hook within react functional components at the top level
// don't call hooks inside loops, condition, or nested functions
function App() {
  return (
    <div className="App">
      <StateCounterClass />
      <StateCounterFunctional />
    </div>
  );
}

export default App;
