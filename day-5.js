const integers = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1102, 16, 13, 225, 1001, 88, 68, 224, 101, -114, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 2, 224, 1, 223, 224, 223, 1101, 8, 76, 224, 101, -84, 224, 224, 4, 224, 102, 8, 223, 223, 101, 1, 224, 224, 1, 224, 223, 223, 1101, 63, 58, 225, 1102, 14, 56, 224, 101, -784, 224, 224, 4, 224, 102, 8, 223, 223, 101, 4, 224, 224, 1, 223, 224, 223, 1101, 29, 46, 225, 102, 60, 187, 224, 101, -2340, 224, 224, 4, 224, 102, 8, 223, 223, 101, 3, 224, 224, 1, 224, 223, 223, 1102, 60, 53, 225, 1101, 50, 52, 225, 2, 14, 218, 224, 101, -975, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 3, 224, 1, 223, 224, 223, 1002, 213, 79, 224, 101, -2291, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 2, 224, 1, 223, 224, 223, 1, 114, 117, 224, 101, -103, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 4, 224, 224, 1, 224, 223, 223, 1101, 39, 47, 225, 101, 71, 61, 224, 101, -134, 224, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 224, 223, 223, 1102, 29, 13, 225, 1102, 88, 75, 225, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 1107, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 329, 1001, 223, 1, 223, 108, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 344, 101, 1, 223, 223, 1008, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 359, 1001, 223, 1, 223, 1107, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 374, 1001, 223, 1, 223, 8, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 389, 101, 1, 223, 223, 8, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 404, 101, 1, 223, 223, 7, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 419, 101, 1, 223, 223, 7, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 434, 101, 1, 223, 223, 1108, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 449, 1001, 223, 1, 223, 108, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 464, 101, 1, 223, 223, 1108, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 479, 101, 1, 223, 223, 1007, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 494, 1001, 223, 1, 223, 107, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 509, 1001, 223, 1, 223, 1008, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 524, 1001, 223, 1, 223, 1007, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 539, 101, 1, 223, 223, 1108, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 554, 1001, 223, 1, 223, 1008, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 569, 101, 1, 223, 223, 1107, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 584, 1001, 223, 1, 223, 7, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 599, 101, 1, 223, 223, 108, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 614, 101, 1, 223, 223, 107, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 629, 1001, 223, 1, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 644, 101, 1, 223, 223, 1007, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 659, 101, 1, 223, 223, 8, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226];

const integers2 = integers.slice();

function getFirstDiagnosticCode (array, input) {
  let firstPosition = 0;
  let secondPosition = 0;
  let thirdPosition = 0;
  let step = 4;
  let add = false;
  let multiply = false;

  for (let i = 0; i < array.length; i = i + step) {
    if (array[i] === 99) {
      return 'halted';
    } else {
      const number = array[i];
      const instruction = number.toString().split('');
      step = 4;

      if (instruction[instruction.length - 3] === '0' || instruction.length < 3) firstPosition = array[i + 1];
      else if (instruction[instruction.length - 3] === '1') firstPosition = i + 1;

      if (instruction[instruction.length - 4] === '0' || instruction.length < 4) secondPosition = array[i + 2];
      else if (instruction[instruction.length - 4] === '1') secondPosition = i + 2;

      if (instruction[instruction.length - 5] === '0' || instruction.length < 5) thirdPosition = array[i + 3];
      else if (instruction[instruction.length - 5] === '1') thirdPosition = i + 3;

      if (instruction[instruction.length - 1] === '3') {
        array[firstPosition] = input;
        step = 2;
      } else if (instruction[instruction.length - 1] === '4') {
        console.log(array[firstPosition]);
        step = 2;
      } else if (instruction[instruction.length - 1] === '1') add = true;
      else if (instruction[instruction.length - 1] === '2') multiply = true;

      if (add) {
        array[thirdPosition] = array[firstPosition] + array[secondPosition];
        add = false;
      } else if (multiply) {
        array[thirdPosition] = array[firstPosition] * array[secondPosition];
        multiply = false;
      }
    }
  }
}

function getSecondDiagnosticCode (array, input) {
  let firstPosition = 0;
  let secondPosition = 0;
  let thirdPosition = 0;
  let step = 4;
  let add = false;
  let multiply = false;

  for (let i = 0; i < array.length; i = i + step) {
    if (array[i] === 99) {
      return 'halted';
    } else {
      const number = array[i];
      const instruction = number.toString().split('');
      step = 4;

      if (instruction[instruction.length - 3] === '0' || instruction.length < 3) firstPosition = array[i + 1];
      else if (instruction[instruction.length - 3] === '1') firstPosition = i + 1;

      if (instruction[instruction.length - 4] === '0' || instruction.length < 4) secondPosition = array[i + 2];
      else if (instruction[instruction.length - 4] === '1') secondPosition = i + 2;

      if (instruction[instruction.length - 5] === '0' || instruction.length < 5) thirdPosition = array[i + 3];
      else if (instruction[instruction.length - 5] === '1') thirdPosition = i + 3;

      if (instruction[instruction.length - 1] === '1') add = true;
      else if (instruction[instruction.length - 1] === '2') multiply = true;
      else if (instruction[instruction.length - 1] === '3') {
        array[firstPosition] = input;
        step = 2;
      } else if (instruction[instruction.length - 1] === '4') {
        console.log(array[firstPosition])
        step = 2;
      } else if (instruction[instruction.length - 1] === '5') {
        if (array[firstPosition] !== 0) i = array[secondPosition] - 4;
        else step = 3;
      } else if (instruction[instruction.length - 1] === '6') {
        if (array[firstPosition] === 0) i = array[secondPosition] - 4;
        else step = 3;
      } else if (instruction[instruction.length - 1] === '7') {
        if (array[firstPosition] < array[secondPosition]) array[thirdPosition] = 1;
        else array[thirdPosition] = 0;
      } else if (instruction[instruction.length - 1] === '8') {
        if (array[firstPosition] === array[secondPosition]) array[thirdPosition] = 1;
        else array[thirdPosition] = 0;
      }

      if (add) {
        array[thirdPosition] = array[firstPosition] + array[secondPosition];
        add = false;
      } else if (multiply) {
        array[thirdPosition] = array[firstPosition] * array[secondPosition];
        multiply = false;
      }
    }
  }
}

console.log(getFirstDiagnosticCode(integers, 1));
console.log(getSecondDiagnosticCode(integers2, 5));
