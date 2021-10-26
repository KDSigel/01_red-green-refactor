const fetchQuotes = require('./fetchQuotes');

describe('fetchQuotes', () => {
  it('return a single quote with the required format from futurama api', async () => {
    const quotes = {
      name: expect(any),
      text: '...',
      image: '...'
    };


    expect(fetchQuotes()).toEqual(quotes);
  });
});
