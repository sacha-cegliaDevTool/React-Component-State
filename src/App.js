import {useState} from 'react'
import Item from './Item';

function App() {


  const [monState, setMonState] = useState(10)
  const modifyState = () => {
    setMonState(20)
  }
  
  return (
    <div className="App">

    <p>React : Modifier le State d'un composant.</p>
     <h1>Hello {monState}</h1>
     <button onClick = {modifyState}> Change State </button>
    </div>
  );
}

export default App;
