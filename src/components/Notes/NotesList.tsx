import {Note} from "./Note";
import classes from './NotesList.module.css';
import instance from "../../axios/fetchData";
import AppSpinner from "../Spinners/AppSpinner";
import {useQuery} from 'react-query'
import React from "react";

const NotesList: React.FC = () => {
    interface INoteList {
        id: string;
        author: string;
        body: string;
    }

    const { data: notes = [], isLoading, isError, refetch } = useQuery<INoteList[]>(
        'notes',
        fetchNotes,
        {retry: 1, refetchOnWindowFocus: false, keepPreviousData: true})

    async function fetchNotes(): Promise<INoteList[]> {
        try {
            const res = await instance.get('/notes.json');
            const fetchedData: INoteList[] = [];
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
                    <button
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => refetch}>
                        Retry
                    </button>
                </div>
            )}
            {isLoading && <AppSpinner />}
        </>
    );
}

export default NotesList;