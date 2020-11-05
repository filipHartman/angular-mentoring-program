import { HoursFromMinutesPipe } from './hours-from-minutes.pipe';

describe('HoursFromMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new HoursFromMinutesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform 100 mins', () => {
    const pipe = new HoursFromMinutesPipe();
    expect(pipe.transform(100)).toBe('1 h 40 mins');
  });

  it('should transform 25 mins', () => {
    const pipe = new HoursFromMinutesPipe();
    expect(pipe.transform(25)).toBe('0 h 25 mins');
  });

  it('should transfor number below 0 to 0 h and 0 mins', () => {
    const pipe = new HoursFromMinutesPipe();
    expect(pipe.transform(-100)).toBe('0 h 0 mins');
  });
});
