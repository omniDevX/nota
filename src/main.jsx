// mongodb/github: tctorbao@gmail.com
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'

const notes = [{id: 1,    content: 'Declutter your mind, embrace minimalist note-taking.',    important: true  },]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes = {notes}/>
)