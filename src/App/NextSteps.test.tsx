/* eslint-disable jest/expect-expect */

import { render, screen } from '@testing-library/react';
import { Button } from 'braid-design-system';
import { BraidTestProvider } from 'braid-design-system/test';
import React from 'react';

test('speedy', () => {
  render(
    <BraidTestProvider>
      <Button>Yo</Button>
    </BraidTestProvider>,
  );

  console.time('yo');
  screen.getByRole('button', { name: 'Yo' });
  console.timeEnd('yo');
});

test('speedy', () => {
  render(
    <div>
      <button>Yo</button>
    </div>,
  );

  console.time('yo');
  screen.getByRole('button', { name: 'Yo' });
  console.timeEnd('yo');
});
