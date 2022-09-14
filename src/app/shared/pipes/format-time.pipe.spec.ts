import { FormatTimePipe } from "./format-time.pipe";

describe('FormatTimePipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    const pipe = new FormatTimePipe();
  
    it('transforms "2022-10-05" and "2022-10-06" to "24.0 hours ago"', () => {
      expect(pipe.transform(new Date('2022-10-05'), new Date('2022-10-06'))).toBe('24.0 hours ago');
    });
  
    // ... more tests ...
  });