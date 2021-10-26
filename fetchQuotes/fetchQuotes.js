const fetch = require('cross-fetch');

const fetchQuotes = async (number) => {

  const results = await fetch(`https://futuramaapi.herokuapp.com/api/quotes/${number}`);
  // .then(results => results.json());
  // .then(result => result.Body.json(results));
  //   const body = await results.json();
  results.then(response => response.json())
    .then(body => {

      return {
        name: (body.character),
        text: (body.quote),
        image: (body.image)
      };
    });
};
module.exports = fetchQuotes;
