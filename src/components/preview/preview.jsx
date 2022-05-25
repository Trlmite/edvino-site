import React, { useState } from 'react'

import GridItem from './grid-item/grid-item'
import Modal from './modal/modal'
import styles from './preview.module.css'


const Preview = ({ data }) => {

    const [modal, setModal] = useState(false)
    const [modalData,setModalData] = useState(null)

    const findModalData = (id, data) => {
        const foundData = data.preview.filter(x => x.id === id)
        setModalData(...foundData)
    }

    const handleClick = (id) => {
        findModalData(id, data)
        console.log(modalData)
        setModal(true)
    }
    const handleModalClose = () => {
        setModal(false)
        setModalData(null)
        console.log(modalData)
    }

    return (
        <>
            <div className={styles.topText}>Darbai</div>
            {modal ? <Modal
                onClick={handleModalClose}
                innerText={modalData.title}
            />
                : null}
            <div className={styles.grid}>
                {data.preview.map(x =>
                    <GridItem
                        key={x.id}
                        id={x.id}
                        image={x.image}
                        title={x.title}
                        year={x.year}
                        onClick={handleClick}
                    />
                )}
            </div>
        </>
    )
}

export default Preview