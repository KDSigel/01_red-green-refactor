const fetchQuotes = require('./fetchQuotes');

describe('fetchQuotes', () => {
  it('return a single quote with the required format from futurama api', async () => {
    const quotes = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };
    
    expect(fetchQuotes(1)).toEqual(quotes);
  });
});
