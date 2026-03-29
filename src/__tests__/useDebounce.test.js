import { renderHook, waitFor } from '@testing-library/react';
import { useDebounce } from '../hooks/useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('test', 500));
    expect(result.current).toBe('test');
  });

  test('should debounce value changes', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );

    expect(result.current).toBe('initial');

    rerender({ value: 'updated', delay: 500 });
    expect(result.current).toBe('initial');

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(result.current).toBe('updated');
    });
  });

  test('should cancel previous timeout on rapid changes', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: 'first' } }
    );

    rerender({ value: 'second' });
    jest.advanceTimersByTime(300);
    
    rerender({ value: 'third' });
    jest.advanceTimersByTime(300);
    
    expect(result.current).toBe('first');

    jest.advanceTimersByTime(200);

    await waitFor(() => {
      expect(result.current).toBe('third');
    });
  });
});
