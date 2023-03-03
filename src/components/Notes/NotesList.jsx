import {Note} from "./Note.jsx";
import AddNewNote from "./AddNewNote.jsx";
import Modal from "../Modals/Modal.jsx";
import {useState} from "react";
import classes from './NotesList.module.css';
import {handleChange} from "../../utils/formUtils.js";
import {hideModalHandler} from "../../utils/modalUtils.js";

function NotesList() {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    return (
        <>
            { modalIsVisible && (
                <Modal onHideModal={hideModalHandler(setModalIsVisible)}>
                    <AddNewNote
                        onChangeBody={handleChange(setBody)}
                        onChangeAuthor={handleChange(setAuthor)}
                    />
                </Modal>
            )}
            <ul className={classes.notes}>
                <Note author={author} body={body} />
            </ul>
        </>
    )
}

export default NotesList;