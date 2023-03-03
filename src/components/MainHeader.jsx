import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';

function MainHeader({ onCreateNote }) {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                Notes
            </h1>
            <p>
                <button className={classes.button}
                        onClick={onCreateNote}>
                    <MdPostAdd size={18} />
                    Add One
                </button>
            </p>
        </header>
    );
}

export default MainHeader;