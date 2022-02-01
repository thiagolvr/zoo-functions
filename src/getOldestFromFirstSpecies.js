const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (idParam) => {
  const findEmployee = employees.find(({ id }) => id === idParam).responsibleFor[0];
  const findResidents = species.find(({ id }) => id === findEmployee).residents;
  const olderAge = findResidents.sort((a, b) => b.age - a.age);
  const result = olderAge.map(({ name, sex, age }) => [name, sex, age])[0];
  return result;
};

module.exports = getOldestFromFirstSpecies;
