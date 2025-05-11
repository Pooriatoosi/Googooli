import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NoteSystem from './components/NoteSystem'
import Form from './components/Form'

function App() {
  // const [title , setTitle] = useState('');
  // const [description , setDescription] = useState('');
  const [notes , setNotes] = useState([]);


 const deleteNote = (id) => {
  setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
 };

  return (
    <>  
     <Header/>
     <NoteSystem setNotes={setNotes} notes={notes} deleteNote={deleteNote}/>
    </>
  );
}

export default App
