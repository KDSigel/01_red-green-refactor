const copyAndPush = require('./copyAndPush');

describe('copyAndPush', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', async () => {
    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});

describe('copyAndPush', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end, with original array unchanged', async () => {
    const numbers = [1, 2, 3];
    copyAndPush(numbers, 4);
    expect(numbers).toEqual([1, 2, 3]);
  });
});
