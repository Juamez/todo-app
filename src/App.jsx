import {useState} from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState()
  const [inputState, setInputState] = useState('')

  function handleChange(event) {
    setInputState(event.target.value)
    console.log(inputState)
  }

  return (
    <div className="App">
      <header>
        <img src="" alt="" />
        <button>change mode</button>
      </header>
      <div>
        <input type="checkbox" name="" id="" aria-label=''/>
        <input 
          type="text" 
          onChange={handleChange}
          aria-label='' 
          placeholder="Create a new todo"
        />
      </div>
      <div>
        {inputState}
      </div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <p>Drag and drop to reorder list</p>
    </div>
  )
}

export default App
