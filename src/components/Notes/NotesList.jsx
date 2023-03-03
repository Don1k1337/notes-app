import {Note} from "./Note.jsx";
import AddNewNote from "./AddNewNote.jsx";
import Modal from "../Modals/Modal.jsx";
import classes from './NotesList.module.css';
import {useState} from "react";

function NotesList({isModalVisible, onStopNote}) {
    const [notes, setNotes] = useState([]);
    function addNewNote(data) {
        setNotes((currentNotes) => [data, ...currentNotes])
    }
    return (
        <>
            { isModalVisible && (
                <Modal onHideModal={onStopNote}>
                    <AddNewNote
                        onCancel={onStopNote}
                        onAddNote={addNewNote}
                    />
                </Modal>
            )}
            { notes.length > 0 && (
                <ul className={classes.notes}>
                {notes.map((note) =>
                    <Note key={note.body}
                    author={note.author}
                    body={note.body}
                    />
                )}
            </ul>
            )}
            { notes.length === 0 && (
                <div className={classes.empty}>
                    <h2>No notes have been added yet.</h2>
                    <p>Click on a button to add one.</p>
                </div>
            )

            }
        </>
    )
}

export default NotesList;