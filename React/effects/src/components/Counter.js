import React from 'react'
import { useState, useEffect } from "react";

function Counter() {
      const [number, setNumber] = useState(0);
      const [name, setName] = useState("Anıl");

      useEffect(() => {
        console.log("Number State Updated!");
      }, [number]);

      useEffect(() => {
        console.log("Component mount edildi");

        const interval = setInterval(() => {
             setNumber((n) => n + 1);
         }, 1000);


            return () => clearInterval(interval);
      }, []);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
     
    </div>
  );
  
}

export default Counter
