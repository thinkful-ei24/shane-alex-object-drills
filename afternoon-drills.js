'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: () => (loaf.water / loaf.flour) * 100
};
//console.log(loaf.hydration());

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
//loopObj(obj);

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
//console.log(newObj.meals[3]);

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
//checkOwner(newArray);


function crackingTheCode(message) {
  const string = message.split(' ');
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  const arr = [];

  for (const word in string) {
    const alphaOffset = string[word][0].charCodeAt() - 96;
    const letter = cipher[string[word][0]];
    if(alphaOffset <= 4) {
      const curLetter = string[word][letter];
      arr.push(curLetter);
    } else {
      arr.push(' ');
    }
  }
  return arr.join(' ');
}
//console.log(crackingTheCode('craft block argon meter bells brown croon droop'));



function createCharacter(name, nick, race, origin, attack, defense) {

  const charObj = {
    name: name,
    nick: nick,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,

    describe: () =>  console.log(`${name} is a ${race} from ${origin}`),
    evaluateFight: (character) => console.log(`Your opponent takes ${attack - character.defense} damage and you receive ${character.attack - defense} damage`),
  };
  return charObj;
}

  const chars = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6), createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1), createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedai', 6, 8), createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 9, 1)];

  chars.find(charObj => charObj.nick === 'bilbo').describe();

  const hobbits = chars.filter(charObj => charObj.race === 'Hobbit');
  console.log(hobbits, hobbits[0], hobbits[1]); //add loop if more than 2

  const attackFive = chars.filter(charObj => charObj.attack >= 5);
  console.log(attackFive, attackFive[0], attackFive[1]); //add loop if more than 2
