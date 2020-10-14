import { HoursFromMinutesPipe } from './hours-from-minutes.pipe';

describe('HoursFromMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new HoursFromMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
