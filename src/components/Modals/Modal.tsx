import React from "react";
import classes from './Modal.module.css';
import {useCustomNavigate} from "../../hooks/useCustomNavigate";
import {ModalProps} from "../../types/modalTypes";


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