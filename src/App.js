import Logo from './components/logo';
import './App.css';
import { useState } from 'react';

function App() {

  const[count, setCount]= useState(0)

  return (
    <div id='base'>
    <div id='head'> 
    
       <p>How many Yerbas Roxy Drinks {count}</p>
         <button id='Count' onClick={() => setCount(count + 1)}>
        Forward 1 
       </button>

       <button id='Count' onClick={() => setCount(count - 1)}>
        Back 1 
       </button>

       <button id='Count' onClick={() => setCount(count - count)}>
        Reset
       </button>



      <h1> Goal 2 </h1>
      <Logo/>
       
       



    </div>
</div>
  );
}

export default App;
