import React from "react";
import { useLoaderData, Link, LoaderFunction } from 'react-router-dom';
import Modal from '../Modals/Modal';
import classes from './NoteDetail.module.css';
import instance from '../../axios/fetchData';
import {INoteData} from "../../types/noteInterfaces";

const NoteDetail: React.FC = () => {
    const note = useLoaderData() as INoteData;
    if (!note) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find note in note list</h1>
                    <p>Unfortunately, the requested note could not be found.</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Back
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{note.author || 'Unknown author'}</p>
                <p className={classes.text}>{note.body || 'Unknown body'}</p>
            </main>
        </Modal>
    );
}

export default NoteDetail;

export const loader: LoaderFunction = async ({ params }) => {
    try {
        const { data } = await instance.get(`/notes/${params.id}.json`);
        return data;
    } catch (e) {
        console.error('Error caused during load note by id: ', e);
    }
};
