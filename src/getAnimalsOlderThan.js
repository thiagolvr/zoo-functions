const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, ageMin) => species
  .find(({ name }) => name === animal).residents.every(({ age }) => age >= ageMin);
module.exports = getAnimalsOlderThan;
