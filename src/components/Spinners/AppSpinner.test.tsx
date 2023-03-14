import React from 'react';
import { render, screen } from '@testing-library/react';
import AppSpinner from "./AppSpinner";
import '@testing-library/jest-dom/extend-expect';

describe('AppSpinner', () => {
    it('renders spinner component with provided css classes', () => {
        render(<AppSpinner />)
        const divElement = screen.getByTestId('wrapper')
        const spanElement = screen.getByTestId('spinner')

        expect(divElement).toHaveClass('container')
        expect(spanElement).toHaveClass('loader')
    })
})