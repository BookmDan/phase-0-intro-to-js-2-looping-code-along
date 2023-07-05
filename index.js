// Code your solutions in this file
function writeCards(stringNames, eventName) {
  // const array = ['apple', 'banana', 'orange', 'grape'];
  const array = []
  for (let counter = 0; counter < stringNames.length; counter++) {
    // console.log('Counter:', counter);
    array.push(
    `Thank you, ${stringNames[counter]}, for the wonderful ${eventName} gift!`);

  }
  return array;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);