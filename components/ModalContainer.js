import { useContext } from 'react'
import { Modal, Button, } from 'antd';
import { AppContext } from '../pages/_app';
import styled from 'styled-components';

const Wrapper = styled(Modal)`
    text-align:center;

    h5 {
        color:var(--black);
        font-weight:700;
    }

    p, button {
        font-size:.9375rem;
    }
`

const ModalContainer = () => {
    const { modalAttr, setModalAttr } = useContext(AppContext);
    const { title, message, ...modalProps } = modalAttr

    const onCancelModal = () => {
        setModalAttr({})
    }

    return (
        <Wrapper
            footer={null}
            closable={false}
            onCancel={onCancelModal}
            width={400}
            {...modalProps}
        >
            <h5>{title ? title : 'Error'}</h5>
            <p>{message}</p>
            <Button onClick={onCancelModal} type='primary'>Okay</Button>
        </Wrapper>
    )
}

export default ModalContainer
