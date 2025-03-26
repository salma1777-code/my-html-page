import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders Hello World text', () => {
  // Render the HelloWorld component
  const { getByText } = render(<HelloWorld />);

  // Assert that the text "Hello World" is present in the component
  const helloWorldText = getByText(/hello world/i);
  expect(helloWorldText).toBeInTheDocument();
});

