const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const objCountAges = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((item) => {
    if (item.age < 18) {
      objCountAges.child += 1;
    } else if (item.age >= 18 && item.age < 50) {
      objCountAges.adult += 1;
    } else {
      objCountAges.senior += 1;
    }
  });
  return objCountAges;
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const numbersOfEntrants = countEntrants(entrants);
  const cust = Object.keys(numbersOfEntrants).reduce((acc, item) => acc
  + numbersOfEntrants[item] * data.prices[item], 0);
  return cust;
}

module.exports = { calculateEntry, countEntrants };
