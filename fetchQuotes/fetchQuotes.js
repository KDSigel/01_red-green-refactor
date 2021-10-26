const fetch = require('cross-fetch');

const fetchQuotes = async (number) => {

  const results = await fetch(`https://futuramaapi.herokuapp.com/api/quotes/${number}`);
  const body = await results.json();
  return {
    name: (body.character),
    text: (body.quote),
    image: (body.image)
  };
};
module.exports = fetchQuotes;
