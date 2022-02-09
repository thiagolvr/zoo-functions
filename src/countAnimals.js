const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }

  if (animal.sex) {
    return species.find(({ name }) => name === animal.specie)
      .residents.filter(({ sex }) => sex === animal.sex).length;
  }
  if (animal.specie) return species.find(({ name }) => name === animal.specie).residents.length;
};

module.exports = countAnimals;
