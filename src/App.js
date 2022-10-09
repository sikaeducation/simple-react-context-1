import './App.css';

function App() {
  return (
    <div className="App">
      <Outer />
    </div>
  );
}

function Outer(){
  const message = "Hello, world!"
  return (
    <div className="Outer">
      <Middle message={ message } />
    </div>
  )
}

function Middle({ message }){
  return (
    <div className="Middle">
      <Inner message={ message } />
    </div>
  )
}

function Inner({ message }){
  return (
    <div className="Inner">
      <p>{ message }</p>
    </div>
  )
}

export default App;
