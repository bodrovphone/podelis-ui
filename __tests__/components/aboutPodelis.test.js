import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from '../config/test-utils';
import AboutPodelis from '../../components/aboutPodelis';

describe('AboutPodelis', () => {
  it('should render logo', () => {
    const { getByText } = render(<AboutPodelis />);

    const logo = getByText('P', { exact: true });

    expect(logo).toBeInTheDocument();
  });

  it('should render slogan', () => {
    const { getByText } = render(<AboutPodelis />);

    const slogan = getByText(/Podelis - Простой и удобный шаринг-сервис\./i);

    expect(slogan).toMatchSnapshot();
  });

  it('should render 3 social media logos', () => {
    const { container } = render(<AboutPodelis />);

    // the reason of this weird selector is that next Image component duplicates them for optimization purpose.
    const logos = container.querySelectorAll('img:not([aria-hidden])');

    expect(logos.length).toBe(3);
  });
});
