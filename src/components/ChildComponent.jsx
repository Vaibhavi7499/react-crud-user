import React from 'react'
import s from "./CssPractise.module.css"

const ChildComponent = () => {
    let a ={
        backgroundColor:"aqua"
    }

  return (
    <div>
        <h1 className={s.heading}>Child Component</h1>
        <h1 style={a}>Inline CSS</h1>
    </div>
  )
}

export default ChildComponent