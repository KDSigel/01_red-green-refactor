const getName = require('./getName');

describe('getName', () => {
  it('returns the name property of an object', async () => {
    const object = { name: 'Aang' };
    expect(getName(object)).toEqual('Aang');
  });
});
