const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find(({ firstName, lastName }) => firstName === employeeName
  || lastName === employeeName);
};

module.exports = getEmployeeByName;
