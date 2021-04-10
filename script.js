'use strict';

let numberRandom = (Math.floor(Math.random() * 101 + 0));

inputNumber();

function inputNumber(){
  let inputUser,
      result;

inputUser = +prompt('Угадай число от 1 до 100');

if (inputUser != null || inputUser != ''){
  if (inputUser > numberRandom){
    alert('Загаданное число меньше');
    inputNumber();
  } else if (inputUser < numberRandom){
     alert('Загаданное число больше');
    inputNumber();
  } else if (inputUser === numberRandom){
    alert('Поздравляю, Вы угадали!!!');
    return;
} else {
  alert('Игра окончена.');
  return;
}
}
return;
}
