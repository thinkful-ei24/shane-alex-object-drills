'use strict';

function makeStudentsReport(data) {
  let newArr = [];
  for (key in data) {
    newArr.push(data[key].name + ': ' + data[key].grade);
  }
  return newArr;
}


const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  const summerSchoolObj = { status: 'In Summer school' };
  for (const item in students) {
    Object.assign(students[item], summerSchoolObj);
  }

  return students;
}

//console.log(enrollInSummerSchool(studentData));

const scratchData = [{
  id: 22,
  foo: 'bar'
},
{
  id: 28,
  foo: 'bizz'
},
{
  id: 19,
  foo: 'bazz'
},
];

function findById(items, idNum) {
  for (const key in items) {
    if (items[key].id === idNum) {
      return items[key];
    }
  }
}


const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  if(Object.keys(object).length !== expectedKeys.length) { return false; }

  for (const key in object) {
    let result = false;
    expectedKeys.forEach(element => {
      if(key === element) { result = true; }
    });
    if(result === false) { return false; }
  }
  return true;
}

//console.log(validateKeys(objectB, expectedKeys));