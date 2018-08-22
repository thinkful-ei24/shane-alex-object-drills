const loaf = {
  flour: 300,
  water: 210,
  hydration: () => (loaf.water / loaf.flour) * 100
};
console.log(loaf.hydration());

const obj = {
  foo: 5,
  bar: 89,
  fum: 'hello',
  quux: 'goodbye',
  spam: 85
};

function loopObj(obj) {
  for (const key in obj) {
    console.log(key, obj[key]);
  }
}
loopObj(obj);

//Arrays in objects
const newObj = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};
console.log(newObj.meals[3]);

const person2 = {
  name: 'Dave',
  jobTitle: 'Boss',
  boss: false
};

const person = {
  name: 'John',
  jobTitle: 'Manager',
  boss: person2.name
};
const person3 = {
  name: 'Jim',
  jobTitle: 'Assistant Manager',
  boss: person2.name
};

const newArray = [person, person2, person3];

function printNames(newArray) {
  for (const key in newArray) {
    console.log(newArray[key].name, newArray[key].jobTitle);
  }
}
// printNames(newArray);

//properties that aren't there
function checkOwner(newArray) {
  for (const key in newArray) {
    if (!newArray[key].boss) {
      console.log(
        `${newArray[key].jobTitle} ${
          newArray[key].name
        } doesn't report to anybody.`
      );
    } else {
      console.log(
        `${newArray[key].jobTitle} ${newArray[key].name} reports to ${
          newArray[key].boss
        }`
      );
    }
  }
}
checkOwner(newArray);
