import classes from './AppSpinner.module.css'
import React from "react";

const AppSpinner: React.FC = () => {
    return <>
        <div className={classes.container}>
            <span className={classes.loader}></span>
        </div>
    </>
}

export default AppSpinner;