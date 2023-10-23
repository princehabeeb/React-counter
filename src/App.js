import React, { useState} from 'react';
import './styles/Counter.css';



const App = () => {
  const [ourValue, setOurValue] = useState(0);
  return (
    <div className='container'>
      <h1>{ourValue}</h1>
      <div className='btn'>
      <button onClick={() => {setOurValue(ourValue + 1)}}>Add</button>
      <button onClick={() => {setOurValue(ourValue - 1)}}>Minus</button>
      </div>
      
    </div>
  )
}

export default App