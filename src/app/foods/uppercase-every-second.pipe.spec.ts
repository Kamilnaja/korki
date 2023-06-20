import { UppercaseEverySecondPipe } from './uppercase-every-second.pipe';

describe('UppercaseEverySecondPipe', () => {
  let pipe: UppercaseEverySecondPipe;

  beforeEach(() => {
    pipe = new UppercaseEverySecondPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should uppercase every second letter', () => {
    expect(pipe.transform('abc')).toBe('aBc');
  });

  it('should uppercase every second letter', () => {
    expect(pipe.transform('')).toBe('');
  });
});
