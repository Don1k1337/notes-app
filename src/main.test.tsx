import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./layouts/App";
import React from "react";

describe('App', () => {
    it('renders the app with the correct hierarchy and routes', () => {
        const queryClient = new QueryClient();
        const expectedElement = (
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={["/"]}>
                        <App />
                </MemoryRouter>
            </QueryClientProvider>
        ) as React.ReactNode;

        render(expectedElement as React.ReactElement<{}>);
    });
});
