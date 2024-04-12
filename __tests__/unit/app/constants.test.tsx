import { describe, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';

describe('Constants', () => {
  test('Test SEO constants', () => {
    testObject(NO_INDEX_PAGE);
  });
});
