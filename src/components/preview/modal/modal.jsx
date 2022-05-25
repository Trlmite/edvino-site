import React from 'react'

import styles from './modal.module.css'

const Modal = ({ onClick, innerText }) => {
  return (
    <div className={styles.modal} onClick={onClick}>{innerText}</div>
  )
}

export default Modal