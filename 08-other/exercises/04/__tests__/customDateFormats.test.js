import customDateFormats from '../solution/js/customDateFormats';

describe('customDateFormats ', () => {
  test('should return an object which return an object with short, and long date properties', () => {
    const date = new Date(2021, 0, 1, 10, 11, 41);

    const expected = {
      long: '2021. január 1. 10:11:41',
      short: '2021. jan. 1. 10:11',
    };

    expect(customDateFormats(date)).toEqual(expected);
  });

  test('should return an object which return an object with short, and long date properties, use 24h format', () => {
    const date = new Date(2021, 0, 1, 22, 11, 41);

    const expected = {
      long: '2021. január 1. 22:11:41',
      short: '2021. jan. 1. 22:11',
    };

    expect(customDateFormats(date)).toEqual(expected);
  });
});
