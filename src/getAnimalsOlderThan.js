const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, ageMin) {
  return species.find(({ name }) => name === animal).residents.every(({ age }) => age >= ageMin);
}

module.exports = getAnimalsOlderThan;
