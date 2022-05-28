import { useState } from 'react'


export function Note ({noteMessage, deleteNote, id}) {
  const [isCompleted, setIsCompleted] = useState(false)

  function completed() {
    setIsCompleted(prev => !prev)
  }

  return (
    <div className="container todo-list">
      <input type="checkbox" onClick={completed} aria-label='' />
      <p className={isCompleted ? 'checked' : null}>
        {noteMessage}
      </p>
      <button onClick={(event) => deleteNote(event, id)}/>
    </div>
  )
}