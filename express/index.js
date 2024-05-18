const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
// app.use(requestLogger)

const Note = require('./models/note')
const UserModel = require('./models/User')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })}

  next(error)
}


const unknownEndpoint = (request, response) => {response.status(404).send({ error: 'unknown endpoint' })}

app.get('/', (request, response) => {response.send('<h1>Hello World!</h1>')})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    userid: body.userid,
    timestamp: body.timestamp,
    content: body.content,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  UserModel.findOne({email : email})
  .then(user => {
      if(user) {
          if(user.password === password){
              res.json({status: "Success", userId: user._id})
          }else{
              res.json("The password is incorrect")
          }
      }else{
          res.json("No record existed")
      }
  })
})

app.post("/register", (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})






app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.MONGODB_PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})