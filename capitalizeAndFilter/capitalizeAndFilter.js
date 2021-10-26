const capitalizeAndFilter = (randomArray) => {

  const capitalArray = randomArray.map(word => 
    word.toUpperCase()
  );

  const noFs = capitalArray.filter(item => item.charAt(0) !== 'F');

  return noFs;

};

module.exports = capitalizeAndFilter;
