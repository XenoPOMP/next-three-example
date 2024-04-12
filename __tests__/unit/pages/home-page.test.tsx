import { render } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';
import { mockResizeObserver } from '@/__tests__/assets/mocks/mockResizeObserver.ts';
import Home from '@/app/page';

describe('Index page', () => {
  beforeAll(() => {
    mockResizeObserver();
  });

  afterAll(() => {
    clearMocks();
  });

  test('Render without errors', () => {
    expect(() => render(<Home />)).not.toThrow();
  });
});
