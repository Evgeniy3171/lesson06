'use strict';
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n) && n != "";
};

inputNumber();

function inputNumber(){
let inputUser = +prompt('Угадай число от 1 до 100');
let numberRandom = (Math.floor(Math.random() * 101 + 0));
console.log('Ваше число: ' + inputUser);

if (inputUser != null){
  let result = (numberRandom > inputUser) ? alert('Загаданное число больше') :
 (numberRandom < inputUser) ? alert('Загаданное число меньше') : alert('Поздравляю, Вы угадали!!!');
}  else {

}
inputNumber();
}
alert('Игра окончена');
