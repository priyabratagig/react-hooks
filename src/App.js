import "./App.css";
// import StateCounterClass from './Components/useState/StateCounterClass'
// import StateCounterFunctional from './Components/useState/StateCounterFunctional';
// import EffectCounterClass from './Components/useEffect/EffectCounterClass';
// import EffectCounterFunctional from './Components/useEffect/EffectCounterFunctional';
// import EffectMouseContainerClass from './Components/useEffect/EffectMouseContainerClass';
// import EffectMouseContainerFunctional from './Components/useEffect/EffectMouseContainerFunctional';
// import { NameContextProvider, HobbyContextProvider } from './Components/useContext/ContextStore';
// import ContextChild1 from './Components/useContext/ContextChild1';
// import ReducerCounter from './Components/useReducer/ReducerCounter';
// import { ContextProvider } from './Components/useReducer/ContextStore'
// import Child1 from './Components/useReducer/Child1'
// import Child2 from './Components/useReducer/Child2'
// import Child3 from './Components/useReducer/Child3'
// import ParentComponent from './Components/useCallback/ParentComponent';
// import MemoFunctionalComponent from './Components/useMemo/MemoFunctionalComponent';
// import RefFunctionalComponent from './Components/useRef/RefFunctionalComponent';
// import RefClassComponent from './Components/useRef/RefClassComponent';
// import DocumentTitle from "./Components/Custom Hooks/useDocumentTile/DocumentTitle";
import Counter from "./Components/Custom Hooks/useCounter/Counter";

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
      {/* <ReducerCounter /> */}
      {/* <ContextProvider>
        <Child1 />
        <Child2 />
        <Child3 />
      </ContextProvider> */}
      {/* <ParentComponent /> */}
      {/* <MemoFunctionalComponent /> */}
      {/* <RefFunctionalComponent /> */}
      {/* <RefClassComponent /> */}
      {/* <DocumentTitle /> */}
      <Counter initial={1} change={2} />
      <Counter />
    </div>
  );
}

export default App;
