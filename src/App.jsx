import {useState} from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState()
  const [inputState, setInputState] = useState('')
  const [changeTheme, setChangeTheme] = useState(true)
  function handleChange(event) {
    setInputState(event.target.value)
    console.log(inputState)
  }

  function changeThemeMode() {
    setChangeTheme(prev => !prev )
    console.log(changeTheme)
  }

  return (
    <div className={changeTheme ? 'dark-mode' : 'light-mode'}>
    <div className="App">
      <header>
        <h1>todo</h1>
        <button className="btn-dark" onClick={changeThemeMode}/>
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
    </div>
  )
}

export default App
