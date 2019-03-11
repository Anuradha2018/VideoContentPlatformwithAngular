import { CustomTimePipe } from './customTimePipe';

describe('CustomTimePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTimePipe();
    expect(pipe).toBeTruthy();
  });
});
