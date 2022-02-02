const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);

const animals = species.map(({ name }) => name);

const getAvailableAnimals = (day) =>
  species
    .filter(({ availability }) => availability.includes(day))
    .map(({ name }) => name);

const scheduleList = () => {
  const mainScope = {};
  days.forEach((day) => {
    const { open, close } = hours[day];
    if (day !== 'Monday') {
      mainScope[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAvailableAnimals(day),
      };
    } else {
      mainScope[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return mainScope;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return scheduleList();
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: scheduleList()[scheduleTarget] };
  }
  if (animals.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return scheduleList();
}

// REFERÊNCIA: depois de refatorar várias vezes e aplicar diferentes lógicas para tentar solucionar com um código mais conciso e limpo, acabei me baseando na lógica do aluno Emerson Alves: https://github.com/tryber/sd-19-c-project-zoo-functions/pull/41/files

module.exports = getSchedule;
