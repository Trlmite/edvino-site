import React from 'react'
import styles from './main.module.css'

const Main = ({ name, surname, image, title, text }) => (
        <div className={styles.container}>
            <div>
                <div className={styles.title}>
                    {name} <br></br> {surname}
                </div>
                <img className={styles.image} src={image} alt="edvino_ft"></img>
            </div>
            <div className={styles.textBox}>
                <div className={styles.textBoxTitle}>{title}
                <p className={styles.textBoxText}>{text}</p>
                </div>
            </div>
        </div>
)

export default Main