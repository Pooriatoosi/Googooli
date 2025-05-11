import React, { useState } from 'react'
import Form from './Form'
import NotesList from './NotesList'
import Category from './Category'

function NoteSystem({ notes, setNotes, deleteNote }) {
    // const description = props.description;
    // description , title , notes , setDescription , setTitle , setNotes , onSubmitForm
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    return (
    
    <div className="note-system">
        <section className="note-system_add">
            <h2 className="note-system_add-title">Add New Note</h2>
           
           <Form setTitle = {setTitle} setDescription = {setDescription} setNotes = {setNotes}/>
        </section>
        <section className="note-system_content">
            <Category/>
            <NotesList notes={notes} onDelete={deleteNote}/>
           
        </section>
    </div>
    
  )
}

export default NoteSystem