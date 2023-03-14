import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';
import React from "react";

const MainHeader: React.FC = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                Notes
            </h1>
            <p>
                     <Link to={`/create`} className={classes.button}>
                        <MdPostAdd size={18} />
                        Add One
                    </Link>
            </p>
        </header>
    );
}

export default MainHeader;