import './App.css';
import {createContext, useContext} from 'react';

function App() {
  return (
    <div className="App">
      <Outer />
    </div>
  );
}

const context = createContext()

function Outer(){
  const message = "Hello, world!"
  return (
    <div className="Outer">
      <context.Provider value={message}>
        <Middle />
      </context.Provider>
    </div>
  )
}

function Middle(){
  return (
    <div className="Middle">
      <Inner />
    </div>
  )
}

function Inner(){
  const message = useContext(context)
  return (
    <div className="Inner">
      <p>{ message }</p>
    </div>
  )
}

export default App;
