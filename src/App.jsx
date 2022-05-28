import {useState} from 'react'
import {Note} from './Note'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    id: 0,
    message: 'Read for 1 hour' 
  },
  {
    id: 1,
    message: 'Jog around the park 3x'
  }
  ])
  const [inputState, setInputState] = useState('')
  const [changeTheme, setChangeTheme] = useState(true)
  function handleChange(event) {
    setInputState(event.target.value)
  }

  function changeThemeMode() {
    setChangeTheme(prev => !prev)
  }

  function addNote(){
    setTodo(note => ([{
      ...note,
      id: note.id + 1,
      message: inputState
    }
    ]))
    console.log(todo)
  }

  return (
    <div className={changeTheme ? 'App dark-mode' : 'App light-mode'}>
      <header>
        <h1>todo</h1>
        <button className={changeTheme ? 'btn btn-dark' : 'btn btn-light'} onClick={changeThemeMode}/>
      </header>
      <div className="input-todo">
        <input 
          type="text" 
          onChange={handleChange}
          aria-label='' 
          placeholder="Create a new todo..."
        />
      
      </div>
      <div className="container">      
        {todo.map(elem => <Note key={elem.id} noteMessage={elem.message}/>)}
        <div className="container msg">
          <p>{todo.length} items left</p>
          <button>Clear completed</button>
        </div>
      </div>
      <div className="container btns-filter">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <footer className="footer">
          <p>Drag and drop to reorder list</p>
      </footer>
    </div>
  )
}

export default App
