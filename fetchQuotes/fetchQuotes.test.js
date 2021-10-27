const fetch = require('cross-fetch');

const fetchQuotes = require('./fetchQuotes');

jest.mock('cross-fetch');

describe('fetchQuotes', () => {
  it('return a single quote with the required format from futurama api', async () => {

    const testQuotes = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };

    const exampleQuote = [
      {
        'character': 'Mom',
        'quote': 'Your dear old Mother won\'t be around forever and just once before I die I\'d\nlike to be Supreme Overlord of Earth.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Mom__Futurama.png'
      }
    ];
    const response = { json: () => exampleQuote };
    fetch.mockResolvedValue(response);

    const actual = await fetchQuotes();
    expect(actual).toEqual(testQuotes);
  });
});
