import {Note} from "./Note.jsx";
import AddNewNote from "./AddNewNote.jsx";
import Modal from "../Modals/Modal.jsx";
import {useState} from "react";
import classes from './NotesList.module.css';

function NotesList() {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);
    function changeBodyHandler(e) {
        setBody(e.target.value)
    }
    function changeAuthorHandler(e) {
        setAuthor(e.target.value)
    }

    function hideModalHandler() {
        setModalIsVisible(false)
    }

    return (
        <>
            { modalIsVisible &&
                <Modal onHideModal={hideModalHandler}>
                    <AddNewNote
                        onChangeBody={changeBodyHandler}
                        onChangeAuthor={changeAuthorHandler}
                    />
                </Modal>
            }
            <ul className={classes.notes}>
                <Note author={author} body={body} />
            </ul>
        </>
    )
}

export default NotesList;