const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    const valuesOfAnimals = {};
    species.forEach(({ name, residents }) => { valuesOfAnimals[name] = residents.length; });
    return valuesOfAnimals;
  }
  if (animal.sex) {
    return species.find(({ name }) => name === animal.specie)
      .residents.filter(({ sex }) => sex === animal.sex).length;
  }
  if (animal) {
    return species.find(({ name }) => name === animal.specie).residents.length;
  }
};

module.exports = countAnimals;

/* Lógica da questão baseada no código de Emerson Alves :
https://github.com/tryber/sd-19-c-project-zoo-functions/pull/41/commits/fee0479f605f19e92d7a5af671a6f7f8d520fb65
*/
