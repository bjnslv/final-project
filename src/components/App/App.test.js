import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import App from './App';

it('renders correctly', () => {
    expect(true).toEqual(false);
    const div = document.createElement('div');
    ReactDom.render(<App />, div);
    ReactDom.unmountComponentAtNode(div);
})