const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === '' || employeeName === undefined) {
    return {};
  }
  return employees.find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

module.exports = getEmployeeByName;
