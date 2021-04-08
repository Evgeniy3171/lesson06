'use strict'
let inputUser,
    numberRandom;
inputUser = +prompt('Угадай число от 1 до 100');
console.log(Math.floor(Math.random() * 101 + 0));
let result = numberRandom === inputUser ? console.log('Поздравляю, Вы угадали!!!') : 
numberRandom > inputUser ? console.log('Загаданное число больше') : 
  console.log('Загаданное число меньше');
