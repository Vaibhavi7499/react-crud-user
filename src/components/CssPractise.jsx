import React from 'react'
import styles from "./CssPractise.module.css"
import ChildComponent from './ChildComponent'
const CssPractise = () => {

  return (
    <div>
        <h1 className={styles.heading}>Welcome to COCSIT College ...</h1>
        <ChildComponent></ChildComponent>
            </div>
  )
}

export default CssPractise