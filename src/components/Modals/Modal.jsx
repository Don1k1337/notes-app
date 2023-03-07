import classes from './Modal.module.css';
import {useCustomNavigate} from "../../hooks/useCustomNavigate.js";
function Modal({children}) {
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