// Code your solutions in this file
function writeCards(stringNames, eventName) {
  // const array = ['apple', 'banana', 'orange', 'grape'];
  // const array = []
  for (let counter = 0; counter < stringNames.length; counter++) {
    // console.log('Counter:', counter);
    console.log(`Thank you, ${stringNames[counter]}, for the wonderful ${eventName} gift!`);

  }
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");
