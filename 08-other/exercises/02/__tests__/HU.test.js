import HU from '../solution/js/HU';

describe('HU ', () => {
  test('date() should return a hungarian formated date', () => {
    const date = new Date(2021, 2, 10);

    expect(HU.date(date)).toBe('2021. 03. 10.');
  });

  test('currency() should return a hungarian formated price', () => {
    const price = 1000.50;

    const replaceNbpsToSpace = (str) => str.replace(/\xa0/g, ' ');
    const replaceHardSpaceToSpace = (str) => str.replace(/\u202f/g, ' ');
    const replaceSpecialSpaces = (str) => replaceHardSpaceToSpace(replaceNbpsToSpace(str));

    expect(replaceSpecialSpaces(HU.currency(price))).toBe('1 000,50 Ft');
  });

  test('list() should return a comma separated string with an "és" word before the last element', () => {
    const arr = ['első', 'második', 'harmadik'];

    expect(HU.list(arr)).toBe('első, második és harmadik');
  });
});
