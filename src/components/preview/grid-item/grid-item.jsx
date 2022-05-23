import React from 'react'

import styles from './grid-item.module.css'

const GridItem = ({ image, title, year, id, onClick, modal }) => {

    return (
        <>
            {modal ? <div className={styles.modal}>modalas veikia</div>
                : null}
            <div className={styles.gridItem} style={{ backgroundImage: (`url` + `(` + image + `)`) }} onClick={onClick}>
                <div className={styles.opacity}>
                    <div className={styles.innerGridItem}>
                        {title} <br></br>
                        {year}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridItem