import React from 'react'
import like from '../../Images/positive-vote.png'
import styles from './Card.module.css'

function Card({img,count,text}) {
  return (
    <div className={styles.div}>
    <div>
        <img src={img} alt="like" /> <span>{count}</span>
    </div>
    <p>{text}</p>
</div>
  )
}

export default Card
