import classes from './Note.module.css'

export function Note({id, author, body}) {
    return (
            <li key={id} className={classes.note}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </li>
    );
}