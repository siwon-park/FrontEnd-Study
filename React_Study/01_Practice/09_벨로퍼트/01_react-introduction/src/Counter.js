import React, {useState} from "react";

const Counter = () => {
  const [currentNumber, setCurrentNumber] = useState(0)

  const onIncrease = () => {
    setCurrentNumber(prevNumber => prevNumber + 1)
  }
  
  const onDecrease = () => {
    setCurrentNumber(prevNumber => prevNumber -1)
  }


  return (
    <div>
      <h1>{currentNumber}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;