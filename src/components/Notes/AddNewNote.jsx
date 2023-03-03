import classes from './AddNewNote.module.css';
import {useState} from "react";
import {handleChange} from "../../utils/formUtils.js";

function AddNewNote({onCancel, onAddNote}) {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    function submitForm(e) {
        e.preventDefault();
        const data = {
            body: body,
            author: author
        };
        onAddNote(data)
        onCancel()
    }

    return (
        <form
            className={classes.form}
            onSubmit={submitForm}
        >
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={handleChange(setBody)} />
            </p>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={handleChange(setAuthor)}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}

export default AddNewNote;