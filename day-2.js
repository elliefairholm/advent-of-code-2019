// look at first integer at position 0, will be either 1/2/99
// 99 = program is finished, 2 = multiplies the next numbers at the next two positions together and saves it int eh third number, 1 = adds up the next number and the one after and stores the result in the third next
//
// is all about hte numbers at each position NOT the actual number itself
// once done, skip forward by 4
//
// before running the program, replace position 1 with 12 and position 2 with 2
// what value is left at osition 0?
//

const IntCodeIntegersArr = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,2,23,10,27,1,6,27,31,1,31,6,35,2,35,10,39,1,39,5,43,2,6,43,47,2,47,10,51,1,51,6,55,1,55,6,59,1,9,59,63,1,63,9,67,1,67,6,71,2,71,13,75,1,75,5,79,1,79,9,83,2,6,83,87,1,87,5,91,2,6,91,95,1,95,9,99,2,6,99,103,1,5,103,107,1,6,107,111,1,111,10,115,2,115,13,119,1,119,6,123,1,123,2,127,1,127,5,0,99,2,14,0,0];

const IntCodeCopy = IntCodeIntegersArr.slice();

function runIntCodeProgram (array) {
  array[1] = 12;
  array[2] = 2;
  let firstPosition = 0;
  let secondPosition = 0;
  let thirdPosition = 0;
  for (let i = 0; i < array.length; i = i + 4) {
    const result = array[0];
    firstPosition = array[i+1];
    secondPosition = array[i+2];
    thirdPosition = array[i+3];
    if (array[i] === 1) {
      array[thirdPosition] = array[firstPosition] + array[secondPosition];
    } else if (array[i] === 2) {
      array[thirdPosition] = array[firstPosition] * array[secondPosition];
    } else if (array[i] === 99) {
      return result;
    }
  }
}

function findNounAndVerb (array) {
  let copy = array.slice();
  let noun = 0;
  let verb = 0;
  let result = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      copy[1] = noun = i;
      copy[2] = verb = j;
      result = getIndexZero(copy);
      if (result === 19690720) return `noun: ${noun}, verb: ${verb}`;
      copy = array.slice();
    }
  }
}

function getIndexZero (array) {
  let firstPosition = 0;
  let secondPosition = 0;
  let thirdPosition = 0;
  for (let i = 0; i < array.length; i = i + 4) {
    const result = array[0];
    firstPosition = array[i+1];
    secondPosition = array[i+2];
    thirdPosition = array[i+3];
    if (array[i] === 1) {
      array[thirdPosition] = array[firstPosition] + array[secondPosition];
    } else if (array[i] === 2) {
      array[thirdPosition] = array[firstPosition] * array[secondPosition];
    } else if (array[i] === 99) {
      return result;
    }
  }
}

// need to initaliase memory to each value i.e posiiton 0 is like address 0
// what pair of outputs produces the number 19690720
// the value placed at position 1 is called a noun, the one at position 2 a verb

// console.log(runIntCodeProgram(IntCodeIntegersArr));
console.log(findNounAndVerb(IntCodeIntegersArr));

// how to query for a match

// query {
//   groups {
//     matches {
//       home_team {
//         name
//       }
//     }
//   }
// }
