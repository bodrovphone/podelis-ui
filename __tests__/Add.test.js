import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from './config/test-utils';
import Add from '../pages/add';

describe('Add Page all components renders', () => {
  // using container here for demonstration purpose mostly...
  it('should render H1 tag with Podelis, nav and footer', () => {
    const { container } = render(<Add />);
    const heading = container.querySelector('h1');
    expect(heading).toHaveTextContent('Podelis');

    const nav = container.querySelector('nav');
    const footer = container.querySelector('footer');
    expect(nav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should render Form component with form element', () => {
    const { getByTestId, container } = render(<Add />);
    const form = getByTestId('form');
    const formElement = container.querySelector('form');
    expect(form).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
  });
});

describe('Add Page behavior', () => {
  it('click on the menu should expand sidebar', () => {
    const { container } = render(<Add />);
    const menu = container.querySelector('.NavMenu');
    fireEvent.click(menu);

    const sideBar = container.querySelector('.active');

    expect(sideBar).toBeInTheDocument();
  });
});
