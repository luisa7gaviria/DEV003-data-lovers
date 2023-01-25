import { directorStat } from '../src/data.js';


describe('directorStat', () => {
  it('should be a function', () => {
    expect(typeof directorStat).toBe('function');
  });

  it('should return 65 for 13 and 20 ', () => {
    expect(directorStat(13 , 20)).toBe(65);
  });

  it('should return NaN for "ghibli" and 20' , () => {
    expect(directorStat("ghibli" , 20)).toBe(NaN);
  });
});


