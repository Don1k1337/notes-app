import {Note} from "./Note.jsx";
import classes from './NotesList.module.css'
function NotesList() {
    return (
        <ul className={classes.notes}>
            <Note author={"Hello"} body={"Test"} />
        </ul>
    )
}

export default NotesList;