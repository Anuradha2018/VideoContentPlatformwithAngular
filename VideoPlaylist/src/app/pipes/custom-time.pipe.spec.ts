import { CustomTimePipe } from './custom-time.pipe';

describe('CustomTimePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTimePipe();
    expect(pipe).toBeTruthy();
  });
});
