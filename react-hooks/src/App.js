import './App.css';
import UseContextHook from './UseContextHook';
// import UseStateHook from './UseStateHook';
// import UseEffectHook from "./UseEffectHook"
// import { useState } from 'react';

function App() {
  // const [state, setState] = useState(true)
  return (
    <div>
      <UseContextHook/>
    </div>
    // <div className="App">
    //  {/* <UseStateHook/>
    //  <button onClick={(e)=> setState(!state)}>Toggle</button>
    //  {state ? <UseEffectHook/> : ""} */}
    // </div>
  );
}

export default App;
