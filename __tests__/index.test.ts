import { add } from '../src/index.js';

describe('add function', () => {
  it('should add', () => {
    expect(add(1,2)).toBe(3);
  })
});
