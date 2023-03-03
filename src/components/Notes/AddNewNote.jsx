import classes from './AddNewNote.module.css';

function AddNewNote(props) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onChangeBody} />
            </p>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={props.onChangeAuthor}/>
            </p>
        </form>
    )
}

export default AddNewNote;