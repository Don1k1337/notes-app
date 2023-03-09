import classes from './AddNewNote.module.css';
import React, { useState } from "react";
import { handleChange } from "../../utils/formUtils";
import {useMutation, useQueryClient} from "react-query";
import Modal from "../Modals/Modal";
import {Form, Link} from "react-router-dom";
import instance from "../../axios/fetchData";
import {useCustomNavigate} from "../../hooks/useCustomNavigate";
import {INoteData} from "../../types/noteInterfaces";

const AddNewNote: React.FC = () => {
    const navigateToHome = useCustomNavigate('/')
    const queryClient = useQueryClient();
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const { mutate } = useMutation((data: INoteData) => {
        return addNewNote(data);
    }, { onSuccess: navigateToHome,
                 onError: error => console.error(error)
    });


    async function addNewNote(data: INoteData): Promise<INoteData> {
        try {
            const response = await instance.post('/notes.json', data);
            await queryClient.invalidateQueries('notes')
            await queryClient.refetchQueries('notes')
            return response.data as INoteData;
        } catch(e) {
            console.error("Error caused during POST", e);
            throw e;
        }
    }
    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await mutate({ body, author })
        } catch (error) {
            console.error("Error adding new note:", error);
        }
    }

    return (
        <Modal>
            <Form method="post" className={classes.form} onSubmit={submitForm}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={handleChange(setBody)} />
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" required onChange={handleChange(setAuthor)} />
                </p>
                <p className={classes.actions}>
                    <Link to={'/'}>
                        <button type="button">Cancel</button>
                    </Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    )
}

export default AddNewNote;