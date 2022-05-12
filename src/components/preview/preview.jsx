import React from 'react'

import GridItem from './grid-item/grid-item'
import styles from './preview.module.css'


const Preview = ({ data }) => (
    <>
        <div className={styles.topText}>Darbai</div>
        <div className={styles.grid}>
            {data.preview.map(x => 
                <GridItem
                    key={x.id}
                    id={x.id}
                    image={x.image}
                    title={x.title}
                    year={x.year}
                />
                )}
        </div>
    </>
)

export default Preview