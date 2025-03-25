import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function incremet() {
        setCount(count + 1);
      } 
    
      //Decrement Function
    
      function decrement() {
        setCount(count - 1);
      }

    return (
        <div>
    <h1>{count}</h1>
      <button onClick={incremet}>Increment</button>
      <button onClick={decrement}>Decremet</button>
    </div>
    );
};

export default Counter;