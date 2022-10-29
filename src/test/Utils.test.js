/* eslint-disable import/extensions */
import Utils from './Util';

describe('Testing the reservation counter function', () => {
    it('This should confirm that an empty array passed into the function would return 0', () => {
      const arr = [];
  
      const returedarr = util.reserveCounter(arr);
      expect(returedarr).toBe(0);
    });
    it('This should confirm that an array of numbers would return the count of the elements in the array', () => {
      const arr = [1, 4, 7, 8];
  
      const returedarr = util.reserveCounter(arr);
      expect(returedarr).toBe(4);
    });
    it('This should confirm that an array of Strings would return the count of the elements in the array', () => {
      const arr = ['Chuma', 'Olamx', 'Alex'];
  
      const returedarr = util.reserveCounter(arr);
      expect(returedarr).toBe(3);
    });
  });