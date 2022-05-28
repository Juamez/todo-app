import {useState} from 'react'
import {Note} from './Note'
import './App.css'

import { nanoid } from 'nanoid'

function App() {
  const [inputState, setInputState] = useState('')
  const [changeTheme, setChangeTheme] = useState(true)
  
  const [todo, setTodo] = useState([{
    id: nanoid(),
    message: 'Read for 1 hour',
    completed: false 
  },
  {
    id: nanoid(),
    message: 'Jog around the park 3x',
    completed: false
  },
  {
    id: nanoid(),
    message: 'Running 4k',
    completed: false
  }
  ])

  function handleChange(event) {
    setInputState(event.target.value)
  }

  function changeThemeMode() {
    setChangeTheme(prev => !prev)
  }

  function addNote(){
    const newTodo = {
      id: nanoid(),
      message: inputState,
      completed: false
    }
    setTodo(prevTodo => [...prevTodo, newTodo])
    setInputState('')
  }

  function deleteNote(event, id) {
    event.stopPropagation()
    setTodo(list => list.filter(unique => unique.id !== id))
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
        <button onClick={addNote}>Enviar</button>
      </div>
      <div className="container">      
        {todo.map(elem => <Note key={elem.id} id={elem.id} noteMessage={elem.message} deleteNote={deleteNote}/>)}
        <div className="container msg">
          <p>{todo.length} {todo.length > 1 ? 'items left' : 'item left'}</p>
          <button onClick={clearCompleted}>Clear completed</button>
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
