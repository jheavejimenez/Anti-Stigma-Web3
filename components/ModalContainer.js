import { useState, useEffect, useContext } from 'react'
import { Modal, Button, } from 'antd';
import { AppContext } from '../pages/_app';

const ModalContainer = () => {
    // const [isModalVisible, setIsModalVisible] = useState(false);
    const { modalAttr, setModalAttr } = useContext(AppContext);
    const { title, message, ...modalProps } = modalAttr

    const onCancelModal = () => {
        setModalAttr({})
    }

    return (
        <Modal
            footer={null}
            closable={false}
            onCancel={onCancelModal}
            {...modalProps}
        >
            {/* <h5>{title ? title : 'Error'}</h5> */}
            <p>{message}</p>
            <Button onClick={onCancelModal}>Ok</Button>
        </Modal>
    )
}

export default ModalContainer
