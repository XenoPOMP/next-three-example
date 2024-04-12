import polyfill from 'resize-observer-polyfill';
import { vi } from 'vitest';

/**
 * Mocks ResizeObserver using polyfill.
 */
export const mockResizeObserver = () => {
  vi.stubGlobal('ResizeObserver', polyfill);
};
