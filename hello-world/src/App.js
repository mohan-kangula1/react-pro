import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greets from './components/Greets';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Messaage from './components/Messaage';
import Counter from './components/Counter';
// import Trick from './components/Trick';

function App() {
  return (
    <div className="App">
      {/* <Trick /> */}
      {/* <Welcome name="poojitha" aliasName="Pooja" />
      <Welcome name="navya" aliasName="Bakki" />
      <Welcome name="divya" aliasName="Nithya" />
      {/* <Welcome /> */}
      {/* <Hello /> */}
      {/* <Greets name="poojitha" aliasName="Pooja">
        <p>This is children of Pooja</p>

        </Greets>*/
      <Greets name="navya" aliasName="Bakki" />

       {/* <button>Action</button>
        </Greets>
      <Greets name="divya" aliasName="Nithya"/>
      <Greets name="pinky" aliasName="Nithyasri"/> } */}
{/* <Messaage /> */}
<Counter />
    </div>
  )
}

export default App;
