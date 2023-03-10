import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "react-query";
import '@testing-library/jest-dom/extend-expect';

describe('App component', () => {
    it('renders the list of notes inside root component',() => {
        const queryClient = new QueryClient();
        const expectedElement = (
            <QueryClientProvider client={queryClient}>
                    <MemoryRouter initialEntries={["/"]}>
                        <App />
                    </MemoryRouter>
            </QueryClientProvider>
        ) as React.ReactNode;

        render(expectedElement as React.ReactElement<{}>);

        const notesList = screen.getByTestId('notes-list');
        expect(notesList).toBeInTheDocument();
    });
});
