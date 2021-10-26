const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('capitalizeAndFilter', () => {
  it('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', async () => {
    const arrayOfStrings =  ['kneel', 'before', 'zod', 'fool'];
    expect(capitalizeAndFilter(arrayOfStrings)).toEqual(['KNEEL', 'BEFORE', 'ZOD']);
  });
});
