import classes from './AddNewNote.module.css';

function AddNewNote({onChangeBody, onChangeAuthor}) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onChangeBody} />
            </p>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={onChangeAuthor}/>
            </p>
        </form>
    )
}

export default AddNewNote;