import { useState, useEffect } from 'react'

import './css/App.css'
import Login from './components/Login'
import Note from './components/Note'
import noteService from './components/communication'
import getDate from './components/GetDate'
import config from './components/config';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('Nota: ') 
  const [userId, setUserId] = useState(null);

  const handleLogin = (userId) => {
    // Receive userId from the Login component and set it in App.jsx state
    setUserId(userId);
  };

  const hook = () => {
    console.log('effect')
    noteService.getAll()
               .then(response => {
                  console.log('promised fulfileeeed')
                  setNotes(response.data)
              })
  }
  useEffect(hook, []) 

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      userid: userId,
      timestamp: getDate(),
      content: newNote,
    }

    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${config.baseURL}/login`, { email, password })
    .then(result => {
        console.log(result)
        if(result.data === "Success"){
            navigate("/home")
        }else{
            navigate("/register")
            alert("You are not registered to this service")

        }
   
    })
    .catch(err => console.log(err))
}


  return (
    <>
      <Login onLogin={handleLogin} />
      <div class="container">
        <div class="chat-body">
          <ul class="chatbot-message"> 
            {notes.filter((note) => note.userid === userId)
              .map(note => 
              <Note key={note.id} note={note} />
            )}
          </ul>
        </div>

        <div class="chat-input">
          <form onSubmit={addNote} className="chat-form">
            
            <textarea 
              placeholder="Type a note..."
              value={newNote}
              onChange={handleNoteChange}
              rows={2} // Adjust the number of rows as needed
            />
            <button type="submit">Send</button>
          </form>
        </div>

        <p className="read-the-docs">The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing.</p>

      </div>
    </>
  )
}

export default App