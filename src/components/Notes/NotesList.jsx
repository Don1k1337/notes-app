import {Note} from "./Note.jsx";
import AddNewNote from "./AddNewNote.jsx";
import Modal from "../Modals/Modal.jsx";
import classes from './NotesList.module.css';
import {useState, useEffect} from "react";
import instance from "../../axios/fetchData.js";

function NotesList({isModalVisible, onStopNote}) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        async function fetchNotes() {
            try {
                setIsLoading(true)
                const res = await instance.get("/notes");
                setNotes(res.data.notes);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                console.error("Error caused during GET", e);
            }
        }
        fetchNotes();
    }, []);

    async function addNewNote(data) {
        try {
            setIsLoading(true)
            const res = await instance.post("/notes", data);
            setIsLoading(false)
            const newNote = res.data
            setNotes((currentNote) => [newNote, ...currentNote])
        } catch (e) {
            setIsLoading(false)
            console.error("Error caused during POST", e);
        }
    }

    return (
        <>
            {isModalVisible && (
                <Modal onHideModal={onStopNote}>
                    <AddNewNote onCancel={onStopNote} onAddNote={addNewNote} />
                </Modal>
            )}{!isLoading && notes.length > 0 && (
                <ul className={classes.notes}>
                    {notes.map((note) => {
                        console.log(note.id)
                        return <Note key={note.id} id={note.id} author={note.author} body={note.body} />;
                    })}
                </ul>
            )}
            {!isLoading && notes.length === 0 && (
                <div className={classes.empty}>
                    <h2>No notes have been added yet.</h2>
                    <p>Click on a button to add one.</p>
                </div>
            )}
            {isLoading && (
                <div className={classes.loading}><p>Loading...</p></div>
            )}
        </>
    );
}

export default NotesList;