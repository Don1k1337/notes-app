import classes from './Note.module.css'

export function Note({author, body}) {
    return (
            <li className={classes.note}>
                <p className={classes.author}>{author || 'Unknown author'}</p>
                <p className={classes.text}>{body || 'Unknown body'}</p>
            </li>
    );
}