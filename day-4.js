// work out the password, it's a 6 digit number
// the value is within this range: 168630-718098
// there are two numbers next to eachother that are the same
// the digits do NOT decrease from left to right --> are either the same or they increase

// how many possible outcomes are there?

function findPassword() {
  let counter = 0;
  for (let i = 168630; i < 718098; i++) {
    const array = i.toString().split('');
    let checks = 0;
    for (let j = 0; j < array.length; j++) {
      if (j !== 5 && parseInt(array[j]) <= parseInt(array[j+1])) {
        checks++;
      }
    }
    if (checks === 5) {
      for (let j = 0; j < array.length; j++) {
        if (j !== 5 && parseInt(array[j]) === parseInt(array[j+1])) {
          checks++;
        }
      }
      if (checks >= 6) {
      console.log(i);
      counter++;
      }
    }
  }
  return counter;
}

console.log('first: ', findPassword()); // 1686

// if there is only one number repeated then it has to be a double

// find the ones that have them going in ascending order
// find the ones that have at least one matching pair
// then if there's only one number that is repeated, then it has to be only 2

function findPassword2() {
  let counter = 0;
  for (let i = 168630; i < 718098; i++) {
    let freqObj = {};
    const array = i.toString().split('');
    let checks = 0;
    for (let j = 0; j < array.length; j++) {
      if (j !== 5 && parseInt(array[j]) <= parseInt(array[j+1])) {
        checks++;
      }
    }
    if (checks === 5) {
      for (let j = 0; j < array.length; j++) {
        if (!freqObj[array[j]]) {
          freqObj[array[j]] = 1
        } else {
          freqObj[array[j]]++
        }
      }
      let freqObjValues = Object.values(freqObj);
      if (freqObjValues.includes(2)) {
        console.log(freqObj)
        counter++;
      }
    }
  }
  return counter;
}


console.log('second: ', findPassword2()); // 1145
