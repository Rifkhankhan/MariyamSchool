import React from 'react'
import styles from './SubHeader.module.css'

function SubHeader({headings,headHandler}) {
  const clickHandler = (head) => {
    headHandler(head)
  }
	

  return (
    <div className={styles.subHeader}>
      <ul>
        {headings.map(head => <li onClick={() => clickHandler(head)}><h3>{head}</h3></li>)}
      </ul>
    </div>
  )
}

export default SubHeader
