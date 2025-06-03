import { describe, it, expect } from 'vitest';
import { sum } from './math.js';

describe('Math functions', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(sum(-1, 5)).toBe(4);
  });

  it('should be error', () => {
    expect(sum(-1, 5)).toBe(5);
  });
});