import './App.css';
// import StateCounterClass from './Components/useState/StateCounterClass'
// import StateCounterFunctional from './Components/useState/StateCounterFunctional';
// import EffectCounterClass from './Components/useEffect/EffectCounterClass';
// import EffectCounterFunctional from './Components/useEffect/EffectCounterFunctional';
// import EffectMouseContainerClass from './Components/useEffect/EffectMouseContainerClass';
// import EffectMouseContainerFunctional from './Components/useEffect/EffectMouseContainerFunctional';
// import { NameContextProvider, HobbyContextProvider } from './Components/useContext/ContextStore';
// import ContextChild1 from './Components/useContext/ContextChild1';
import ReducerCounter from './Components/useReducer/ReducerCounter';

// only call hook within react functional components at the top level
// don't call hooks inside loops, condition, or nested functions
function App() {
  return (
    <div className="App">
      {/* <StateCounterClass /> */}
      {/* <StateCounterFunctional /> */}
      {/* <EffectCounterClass /> */}
      {/* <EffectCounterFunctional /> */}
      {/* <EffectMouseContainerClass /> */}
      {/* <EffectMouseContainerFunctional /> */}
      {/* <NameContextProvider>
        <HobbyContextProvider>
          <ContextChild1 />
        </HobbyContextProvider>
      </NameContextProvider> */}
      <ReducerCounter />
    </div>
  );
}

export default App;
