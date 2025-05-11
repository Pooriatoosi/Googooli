import React from 'react'

function Header() {
    
  return (
    <>
    <header className="header">
    <h1 className="header-title">My Notes (1)</h1>
    <select name="" id="" className="header-sort">
        <option value="latest" className="header-sort_item">Sort based on latest notes</option>
        <option value="earliest" className="header-sort_item">Sort based on earliest notes</option>
        <option value="completed" className="header-sort_item">Sort based on completed notes</option>
    </select>
</header>
<div className="header-line"></div>
</>
  )
  
}

export default Header