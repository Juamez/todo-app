
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <img src="" alt="" />
        <button>change mode</button>
      </header>
      <input type="text" aria-label='' placeholder="Create a new todo"/>
      <div>
        todo's
      </div>
      <div>
        <button>All</button>
        <button>Acive</button>
        <button>Completed</button>
      </div>
      <p>Drag and drop to reorder list</p>
    </div>
  )
}

export default App
