'use strict';

function makeStudentsReport(data) {
  let newArr = [];
  for (key in data) {
    newArr.push(data[key].name + ': ' + data[key].grade);
  }
  return newArr;
}



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