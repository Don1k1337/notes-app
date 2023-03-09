import React from "react";
import classes from './Modal.module.css';
import {useCustomNavigate} from "../../hooks/useCustomNavigate.js";

type ModalProps = {
    children: React.ReactNode
}
const Modal = ({children}: ModalProps) => {
    const navigateToHome = useCustomNavigate('/')
    return (
        <>
            <div className={classes.backdrop} onClick={navigateToHome}/>
            <dialog open
                    className={classes.modal}>{children}
            </dialog>
        </>
    )
}

export default Modal;