import {Note} from "./Note.jsx";
import AddNewNote from "./AddNewNote.jsx";
import Modal from "../Modals/Modal.jsx";
import classes from './NotesList.module.css';
import {useState, useEffect} from "react";
import instance from "../../axios/fetchData.js";
import AppSpinner from "../Spinners/AppSpinner.jsx";

function NotesList({isModalVisible, onStopNote}) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const res = await instance.get("/notes.json");
                const fetchedData = [];

                for (const key in res.data) {
                    fetchedData.push({
                        id: key,
                        ...res.data[key],
                    });
                }
                setNotes(fetchedData);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        }
        fetchData().catch((error) =>
            console.error("Unhandled promise rejection:", error)
        );
    }, []);

    async function addNewNote(data) {
        setIsLoading(true);

        try {
            const res = await instance.post("/notes.json", data);
            const newNote = {
                ...data,
                id: res.data.name,
            };
            setNotes((currentNotes) => [newNote, ...currentNotes]);
        } catch (e) {
            console.error("Error caused during POST", e);
        }

        setIsLoading(false);
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
                    return <Note key={`note-${note.id}`} author={note.author} body={note.body} />;

                })}
            </ul>
        )}
            {!isLoading && notes.length === 0 && (
                <div className={classes.empty}>
                    <h2>No notes have been added yet.</h2>
                    <p>Click on a button to add one.</p>
                </div>
            )}
            {isLoading && (<AppSpinner />
            )}
        </>
    );
}

export default NotesList;