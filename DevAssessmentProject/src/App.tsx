import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="cards">
        <button id="1" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <div className="buttons">
        <button id="sort1" onClick={() => setCount(0)}>
          Sort by most clicked
        </button>
        <button id="sort2" onClick={() => setCount(0)}>
          Sort by earliest clicked
        </button>

        <br></br>

        <button id="clear" onClick={() => setCount(0)}>
          Clear
        </button>
      </div>
    </>
  )
}

export default App
