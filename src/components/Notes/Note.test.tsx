import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Note } from './Note';
import '@testing-library/jest-dom/extend-expect';
describe('Note', () => {
    const note = {
        id: 'generated id in str representation',
        author: 'Test author',
        body: 'This is the test body of the note'
    };

    it('renders the author and body of the note', () => {
        render(
            <MemoryRouter>
                <Note {...note} />
            </MemoryRouter>
        );

        expect(screen.getByText(note.author)).toBeInTheDocument();
        expect(screen.getByText(note.body)).toBeInTheDocument();
    });
});