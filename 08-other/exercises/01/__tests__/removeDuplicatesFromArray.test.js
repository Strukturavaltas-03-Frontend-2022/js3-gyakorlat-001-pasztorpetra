import removeDuplicatesFromArray from '../solution/js/removeDuplicatesFromArray';

describe('removeDuplicatesFromArray ', () => {
  test('should return an array without duplicates', () => {
    const arr = [1, 2, 3, 4, 5, 1, 2, 3];

    expect(removeDuplicatesFromArray(arr)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });

  test('should an array with a single item, if all ite was the same', () => {
    const arr = [1, 1, 1, 1, 1];

    expect(removeDuplicatesFromArray(arr)).toEqual([1]);
  });
});
