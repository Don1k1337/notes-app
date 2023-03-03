import classes from './Note.module.css'

export function Note(props) {
    return (
        <li className={classes.note}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
}