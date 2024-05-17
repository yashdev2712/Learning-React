import React, { useState } from 'react'
import Button from './Components/Button'
import "./index.css"


function App() {
  const [exp, setExp] = useState("");
  const [result, setResult] = useState(0);

  function handleClick(value) {
    if (value == "AC") {
      allClear();
    } else if (value == "CE") {
      clear();
    } else if (value == "=") {
      calculate();
    } else {
      setExp(prev => prev + value)
    }
  }

  function allClear() {
    setExp("");
    setResult(0);
  }

  function clear() {
    setExp(exp.slice(0, -1))
  }

  function calculate() {
    try {
      setResult(eval(exp));
    } catch (err) {
      setResult(err)
    }

  }


  return (
    <>
      <div className="main">
        <div className="display">
          <div className='result'>{result}</div>
          <div className='current-operations'>{exp}</div>
        </div>
        <div className='gird-items'>
          <Button value={8} onClick={handleClick} />
          <Button value={7} onClick={handleClick} />
          <Button value={9} onClick={handleClick} />
          <Button value={"/"} onClick={handleClick} />

          <Button value={4} onClick={handleClick} />
          <Button value={5} onClick={handleClick} />
          <Button value={6} onClick={handleClick} />
          <Button value={"-"} onClick={handleClick} />

          <Button value={1} onClick={handleClick} />
          <Button value={2} onClick={handleClick} />
          <Button value={3} onClick={handleClick} />
          <Button value={"="} onClick={handleClick} />

          <Button value={0} onClick={handleClick} />
          <Button value={"*"} onClick={handleClick} />
          <Button value={"CE"} onClick={handleClick} />
          <Button value={"AC"} onClick={handleClick} />
        </div>
      </div>
    </>
  )
}

export default App