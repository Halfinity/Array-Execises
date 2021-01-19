var numbers = '';
for (var i = 0; i < 20; i++) {
  numbers += Math.floor(Math.random() * 10);
}

numbers = numbers.replace(/([02468])(?=[02468])/g, '$1-');

console.log(numbers);