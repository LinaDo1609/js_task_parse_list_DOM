'use strict';

const persons = document.body.querySelectorAll('li');

function sortSalary() {
  let previous = persons[0]
    .getAttribute('data-salary')
    .replace((/[,$]/g, ''), 10);

  for (let i = 1; i < persons.length; i++) {
    const current = persons[i]
      .getAttribute('data-salary')
      .replace((/[,$]/g, ''), 10);

    if (current > previous) {
      persons[i - 1].before(persons[i]);
    }

    previous = current;
  }
}

function getEmployee() {
  const employee = [];

  for (const person of persons) {
    const obj = {};

    obj.name = person.textContent.trim();
    obj.position = person.getAttribute('data-position');

    obj.salary = parseInt(
      person.getAttribute('data-salary').replace(/[,$]/g, ''),
      10,
    );
    obj.age = parseInt(person.getAttribute('data-age'), 10);

    employee.push(obj);
  }

  return employee;
}

sortSalary();
getEmployee();
