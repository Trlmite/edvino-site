import React, { useState } from 'react'

import GridItem from './grid-item/grid-item'
import styles from './preview.module.css'


const Preview = ({ data }) => {

    const [modal, setModal] = useState(false)

    const handleClick = () => {
        if(modal){
            setModal(false)
        } else {
            setModal(true)
        }
        console.log(modal)
    }


    return (
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
                        onClick={handleClick}
                        modal={modal}
                    />
                )}
            </div>
        </>
    )
}

export default Preview