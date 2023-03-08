import classes from './AddNewNote.module.css';
import { useState } from "react";
import { handleChange } from "../../utils/formUtils.js";
import {useMutation, useQueryClient} from "react-query";
import Modal from "../Modals/Modal.jsx";
import {Form, Link} from "react-router-dom";
import instance from "../../axios/fetchData.js";
import {useCustomNavigate} from "../../hooks/useCustomNavigate.js";

function AddNewNote() {
    const navigateToHome = useCustomNavigate('/')
    const queryClient = useQueryClient();
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const { mutate } = useMutation((data) => {
        return addNewNote(data)
    }, { onSuccess: navigateToHome })

    async function addNewNote(data) {
        try {
            await instance.post('/notes.json', data);
            await queryClient.invalidateQueries('notes')
            await queryClient.refetchQueries('notes')
        } catch(e) {
            console.error("Error caused during POST", e);
        }
    }
    async function submitForm(e) {
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