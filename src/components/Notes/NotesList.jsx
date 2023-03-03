import {Note} from "./Note.jsx";
import classes from './NotesList.module.css'
import AddNewNote from "./AddNewNote.jsx";
import {useState} from "react";

function NotesList() {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    function changeBodyHandler(e) {
        setBody(e.target.value)
    }
    function changeAuthorHandler(e) {
        setAuthor(e.target.value)
    }

    return (
        <>
            <AddNewNote
                onChangeBody={changeBodyHandler}
                onChangeAuthor={changeAuthorHandler}
            />
            <ul className={classes.notes}>
                <Note author={author} body={body} />
            </ul>
        </>
    )
}

export default NotesList;