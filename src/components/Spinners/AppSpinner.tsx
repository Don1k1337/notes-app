import classes from './AppSpinner.module.css'
import React from "react";

const AppSpinner: React.FC = () => {
    return <>
        <div data-testid="wrapper" className={classes.container}>
            <span data-testid="spinner" className={classes.loader}></span>
        </div>
    </>
}

export default AppSpinner;