import classes from './AppSpinner.module.css'

function AppSpinner() {
    return <>
        <div className={classes.container}>
            <span className={classes.loader}></span>
        </div>
    </>
}

export default AppSpinner;