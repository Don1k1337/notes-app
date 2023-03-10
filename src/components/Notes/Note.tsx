import classes from './Note.module.css'
import {Link} from "react-router-dom";
import React from "react";
import slugify from "slugify";
import {INoteData} from "../../types/noteInterfaces";

export const Note: React.FC<INoteData> = ({ id, author, body }) => {
    const slug = slugify(body, { lower: true, replacement: '_' });
    return (
            <li className={classes.note}>
                <Link to={`${id}/${slug}`}>
                    <p className={classes.author}>{author || 'Unknown author'}</p>
                    <p className={classes.text}>{body || 'Unknown body'}</p>
                </Link>
            </li>
    );
}