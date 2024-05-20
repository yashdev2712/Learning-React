import React from 'react'
import { data } from './data'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(null);
  function onSingleSelect(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);

  }
  return (
    <>
      <div className="wrapper">
        <h1>Accordian</h1>
        {
          data && data.length > 0 ?
            data.map((item) => <div className='items'>
              <div className='question' onClick={() => { onSingleSelect(item.id) }}>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                selected === item.id ? <div>{item.answer}</div> : null
              }
            </div>)
            : <span>No Data </span>
        }
      </div>
    </>
  )
}

export default App