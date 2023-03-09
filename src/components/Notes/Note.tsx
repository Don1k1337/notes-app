import classes from './Note.module.css'
import {Link} from "react-router-dom";
import slugify from "slugify";
import React from "react";

interface INote {
    id: string,
    author: string,
    body: string
}

export const Note: React.FC<INote> = ({ id, author, body }) => {
    const slug = slugify(body, {lower: true})
    return (
            <li className={classes.note}>
                <Link to={`${id}/${slug}`}>
                    <p className={classes.author}>{author || 'Unknown author'}</p>
                    <p className={classes.text}>{body || 'Unknown body'}</p>
                </Link>
            </li>
    );
}