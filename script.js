'use strict'
let inputUser,
    numberRandom;
inputUser = +prompt('Угадай число от 1 до 100');
numberRandom = (Math.floor(Math.random() * 101 + 0));
console.log(numberRandom);
let result = (numberRandom === inputUser) ? console.log('Поздравляю, Вы угадали!!!') : 
(numberRandom > inputUser) ? console.log('Загаданное число больше') : 
  console.log('Загаданное число меньше');
