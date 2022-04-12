import React from 'react'
import styles from '../styles/Home.module.scss'

function Header(props) {
  return (
    <div className='header'>
      <h1 className={styles.title}>
         {props.title}
        </h1>
        <p className={styles.description}>
         {props.subtitle}
        </p>
    </div>
  )
}

export default Header
