// import React from 'react'

// function NotesList() {
//   return (
//     <section className="notes-list">
//        {NotesList.map((notes ,onDelete) => (
//         <Note key={note.id} note={note} onDelete={onDelete}/>
//        ))}
//     </section>
//   );
// }

// export default NotesList


// function Note()
// {
//     return(
//     <div className="note-list_item">
//         <h3 className="note-list_item-title">Hello</h3>
//         <div className="note-list_item-info">
//         <p className="note-list_item-description">Hello Hojjat</p>
//         <div className="note-list_item-features">
//         {/* className="note-list_item-delete" */}
//             <span 
//             onClick={()=>{
//                 if(window.confirm('Are you sure that you want to delete this description?')){
//                     onDelete(note.id);
//                 }
//             }}
//             >❌</span>
//             <input type="checkbox" className="note-list_item-check"/>
//         </div>
//     </div>
//     <div className="note-list_item-date">March 16, 2025</div>
// </div>
//         );
// }

import React from 'react';

function NotesList({ notes, onDelete }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </section>
  );
}

function Note({ note, onDelete }) {
  return (
    <div className="note-list_item">
      <h3 className="note-list_item-title">{note.title}</h3>
      <div className="note-list_item-info">
        <p className="note-list_item-description">{note.description}</p>
        <div className="note-list_item-features">
          <span 
            onClick={() => {
              if (window.confirm('Are you sure that you want to delete this description?')) {
                onDelete(note.id);
              }
            }}
          >
            ❌
          </span>
          <input type="checkbox" className="note-list_item-check" />
        </div>
      </div>
      <div className="note-list_item-date">
        {new Date(note.date).toLocaleDateString()}
      </div>
    </div>
  );
}

export default NotesList;
