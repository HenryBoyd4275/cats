const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

// get the return value right away from the function
// const bombay = breedDetails('Bombay');
// console.log(bombay); //=> prints out the description for that breed

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    console.log(breedDetails('Bombay')); 
  });
  it('returns breed details for the Balinese breed', () => {
    console.log(breedDetails('Balinese')); 
  });
  it('returns nothing', () => {
    console.log(breedDetails('')); 
  });
});
