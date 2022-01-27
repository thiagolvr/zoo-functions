const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const findManager = employees.find((item) => item.managers.includes(id));
  if (findManager) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const validateManager = isManager(managerId);
  if (!validateManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } {
    const catNames = employees.filter((item) => item.managers.includes(managerId));
    return catNames.map((item) => `${item.firstName} ${item.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };

/* REFERÊNCIA
Lógica de solução baseado na lógica da aluna Juliana Espinola:
https://github.com/tryber/sd-19-c-project-zoo-functions/pull/120/files

*/
