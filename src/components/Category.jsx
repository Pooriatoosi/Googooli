import React from 'react'

function Category() {
  return (
    <>
     <ul className="note-system_status-list">
                <li className="note-system_status-item">All <span className="note-system_status-badge">1</span></li>
                <li className="note-system_status-item">Completed <span className="note-system_status-badge">0</span></li>
                <li className="note-system_status-item">Open <span className="note-system_status-badge">1</span></li>
            </ul>
    </>
  )
}

export default Category