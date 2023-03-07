import classes from './AddNewNote.module.css';
import { useState } from "react";
import { handleChange } from "../../utils/formUtils.js";
import {useMutation} from "react-query";

function AddNewNote({ onCancel, onAddNote }) {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const { mutate } = useMutation((data) => {
        return onAddNote(data)
    }, { onSuccess: () => onCancel()})

    async function submitForm(e) {
        e.preventDefault();
        try {
            await mutate({ body, author })
        } catch (error) {
            console.error("Error adding new note:", error);
        }
    }

    return (
        <form className={classes.form} onSubmit={submitForm}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={handleChange(setBody)} />
            </p>
            <p>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" required onChange={handleChange(setAuthor)} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}

export default AddNewNote;