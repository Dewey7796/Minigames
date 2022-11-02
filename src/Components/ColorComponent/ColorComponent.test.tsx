import React, { DOMElement } from 'react';
import { render, screen } from '@testing-library/react';
import ColorComponent from './ColorComponent';
import { link } from 'fs';
import { act } from 'react-dom/test-utils';

test('renders colors list', () => {
    act(() => {
        render(<ColorComponent id={1} color="blue" />);
    })
});
