import {Note} from "./Note.jsx";
import classes from './NotesList.module.css';
import instance from "../../axios/fetchData.js";
import AppSpinner from "../Spinners/AppSpinner.jsx";
import {useQuery} from 'react-query'

function NotesList() {
    const { data: notes = [], isLoading, isError, refetch } = useQuery(
        'notes',
        fetchNotes,
        {retry: 1, refetchOnWindowFocus: false, keepPreviousData: true})

    async function fetchNotes() {
        try {
            const res = await instance.get('/notes.json');
            const fetchedData = [];
            for (const key in res.data) {
                fetchedData.push({id: key, ...res.data[key]});
            }
            return fetchedData;
        } catch (e) {
            console.error('Failed to load the data from server response')
            throw e
        }
    }

    return (
        <>
            <ul className={classes.notes}>
                {notes.map((note) => {
                    return <Note key={`note-${note.id}`} id={note.id} author={note.author} body={note.body} />;
                })}
            </ul>
            {notes.length === 0 && (
                <div className={classes.empty}>
                    <h2>No notes have been added yet.</h2>
                    <p>Click on a button to add one.</p>
                </div>
            )}
            {isError && (
                <div className={classes.empty}>
                    <p>Seems to be error caused on server-side</p>
                    <button onClick={refetch}>Retry</button>
                </div>
            )}
            {isLoading && <AppSpinner />}
        </>
    );
}

export default NotesList;