import React from 'react'
import { useState } from 'react'

export const App = () => {

  const [count, setCount] = useState<number>(0);
  
  const incrementCount = () => {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
      <br/>
      count is: {count}
    </div>
  )
}
