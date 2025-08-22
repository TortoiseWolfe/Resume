import { renderHook, act } from '@testing-library/react';
import { useTypewriter } from '../useTypewriter';

describe('useTypewriter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should start with empty display text', () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: 'Hello World', speed: 50 })
    );

    expect(result.current.displayText).toBe('');
    expect(result.current.isComplete).toBe(false);
    expect(result.current.isTyping).toBe(false);
  });

  it('should type out text character by character', () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: 'Hello', speed: 50 })
    );

    act(() => {
      vi.advanceTimersByTime(50);
    });

    expect(result.current.displayText).toBe('H');
    expect(result.current.isTyping).toBe(true);

    act(() => {
      vi.advanceTimersByTime(50);
    });

    expect(result.current.displayText).toBe('He');

    act(() => {
      vi.advanceTimersByTime(150); // Complete the rest
    });

    expect(result.current.displayText).toBe('Hello');
    expect(result.current.isComplete).toBe(true);
    expect(result.current.isTyping).toBe(false);
  });

  it('should respect delay parameter', () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: 'Hi', speed: 50, delay: 100 })
    );

    // Should not start typing during delay
    act(() => {
      vi.advanceTimersByTime(50);
    });

    expect(result.current.displayText).toBe('');

    // Should start typing after delay
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.displayText).toBe('H');
  });

  it('should call onComplete when typing is finished', () => {
    const onComplete = vi.fn();

    renderHook(() => useTypewriter({ text: 'Hi', speed: 50, onComplete }));

    act(() => {
      vi.advanceTimersByTime(150); // Complete typing
    });

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('should handle empty text', () => {
    const { result } = renderHook(() => useTypewriter({ text: '', speed: 50 }));

    expect(result.current.displayText).toBe('');
    expect(result.current.isComplete).toBe(true);
    expect(result.current.isTyping).toBe(false);
  });

  it('should restart typing when text changes', () => {
    const { result, rerender } = renderHook(
      ({ text }) => useTypewriter({ text, speed: 50 }),
      { initialProps: { text: 'First' } }
    );

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.displayText).toBe('Fi');

    // Change text
    rerender({ text: 'Second' });

    expect(result.current.displayText).toBe('');
    expect(result.current.isComplete).toBe(false);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.displayText).toBe('Se');
  });
});
