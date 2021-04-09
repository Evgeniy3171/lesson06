'use strict';
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n) && n != "";
};

inputNumber();

function inputNumber(){
  let inputUser,
      numberRandom,
      result;

inputUser = prompt('Угадай число от 1 до 100');
numberRandom = (Math.floor(Math.random() * 101 + 0));
console.log('Ваше число: ' + inputUser);

if (inputUser === null){
 alert('Игра окончена.');
 return;
} else {
  result = (numberRandom === inputUser) ? alert('Поздравляю, Вы угадали!!!') :
(numberRandom > inputUser) ? (alert('Загаданное число больше') + inputNumber()) :
  (alert('Загаданное число меньше') + inputNumber());
  return;
}
}

