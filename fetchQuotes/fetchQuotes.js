const fetch = require('cross-fetch');

const fetchQuotes = async () => {
  const results = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const [quote] = await results.json();
  return {
    name: quote.character,
    text: quote.quote,
    image: quote.image
  };
};
module.exports = fetchQuotes;
