import objectConverter from '../solution/js/objectConverter';

const arr = ['első', 'második', 'harmadik'];

const set = new Set();
set.add('első');
set.add('második');
set.add('harmadik');

const map = new Map();
map.set(0, 'első');
map.set(1, 'második');
map.set(2, 'harmadik');

describe('objectConverter ', () => {
  describe('setToArray() ', () => {
    test('should return an array', () => {
      expect(objectConverter.setToArray(set)).toEqual(arr);
    });
  });

  describe('setToMap() ', () => {
    test('should return a map', () => {
      expect(objectConverter.setToMap(set)).toEqual(map);
    });
  });

  describe('mapToArray() ', () => {
    test('should return an array', () => {
      expect(objectConverter.mapToArray(map)).toEqual(arr);
    });
  });

  describe('arrayToMap() ', () => {
    test('should return a map', () => {
      expect(objectConverter.arrayToMap(arr)).toEqual(map);
    });
  });

  describe('arrayToSet() ', () => {
    test('should return a set', () => {
      expect(objectConverter.arrayToSet(arr)).toEqual(set);
    });
  });

  describe('mapToSet() ', () => {
    test('should return a set', () => {
      expect(objectConverter.mapToSet(map)).toEqual(set);
    });
  });
});
