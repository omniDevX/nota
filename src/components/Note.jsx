const Note = ({ note }) => {
    return (
      <li>{note.timestamp} {note.content}</li>
    )
  }
  
export default Note