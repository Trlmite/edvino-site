import React from 'react'

import styles from './modal.module.css'

const Modal = ({ onClick, title, videoURL, description, year }) => {
  return (
    <div className={styles.modal} >
      <div className={styles.modalContainer}>
        <div className={styles.innerModal}>
          <div className={styles.closeIcon} onClick={onClick}>✖</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.videoContainer}>
            <iframe title={title} width="100%" height="100%" src={videoURL} frameborder="0"   allowfullscreen></iframe>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.margin}>{description}</div>
           {year}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal