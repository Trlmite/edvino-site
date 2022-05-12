import React from 'react'

import styles from './grid-item.module.css'



const GridItem = ({ image, title, year }) => (
    <div className={styles.gridItem} style={{ backgroundImage: (`url` + `(` + image + `)`) }}>
        <div className={styles.opacity}>
            <div className={styles.innerGridItem}>
                {title} <br></br>
                {year}
            </div>
        </div>
    </div>
)

export default GridItem