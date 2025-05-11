import React, { useState } from 'react'

function Form({setNotes}) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


    const handleSubmitForm = (e) =>{
        e.preventDefault();

        const note ={
            id: new Date().getTime(),
            title,
            description,
            date: new Date(),
            isComplete: false
                    };
        setNotes((pervNotes) => [...pervNotes, note]);

        setTitle('');
        setDescription('');
    }
  return (
    <form 
    action="#" 
    className="note-system_form"
    onSubmit={handleSubmitForm}
    >
   <input 
  type="text" 
  className="note-system_form-title" 
  placeholder="Note title"
  onChange={(e) => setTitle(e.target.value)}
/>
<input 
  type="text" 
  className="note-system_form-description" 
  placeholder="Note description"
  onChange={(e) => setDescription(e.target.value)}
/>
    <input 
    type="submit" 
    className="note-system_form-submit" 
    value="Add New Note"/>
</form>
  )
}

export default Form