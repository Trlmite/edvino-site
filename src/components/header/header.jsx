import React from 'react'
import styles from './header.module.css'

const Header = () => (
    <div className={styles.container}>
        <div className={styles.title}>Edvinas Reikalas</div>
        <div>
            <a>Apie mane</a>
            <a className={styles.anchor}>Darbai</a>
            <a>Susisiekime ?</a>
        </div>
    </div>
  )

export default Header