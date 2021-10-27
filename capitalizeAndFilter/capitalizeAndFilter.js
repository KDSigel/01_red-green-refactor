const capitalizeAndFilter = (randomArray) => {

  // const newArray = [];
  // for (const item of randomArray) {
  //   const upperItem = item.toUpperCase();
  //   if (upperItem.charAt(0) !== 'F'
  //   ) newArray.push(upperItem);
  // }
  // return newArray;


  const capitalArray = randomArray.map(word => 
    word.toUpperCase()).filter(item => item.charAt(0) !== 'F');
  return capitalArray;

};

module.exports = capitalizeAndFilter;
