'use strict';

function playNumber(){
  let numberRandom = (Math.floor(Math.random() * 101 + 0));

console.log(numberRandom);

function inputNumber(){
  let inputUser;

  inputUser = prompt('Угадай число от 1 до 100');

  console.log(isNaN(inputUser));

  if (inputUser === null){
    alert('Игра окончена.');
    return;
  } else if (inputUser.trim() === '' || inputUser === undefined || isNaN(inputUser)){// Убирает пробелы спереди и сзади
    alert('Введите число от 0 до 100');
    inputNumber();
  } else if (+inputUser > numberRandom){
      alert('Загаданное число меньше');
      inputNumber();
  } else if (+inputUser < numberRandom){
      alert('Загаданное число больше');
    inputNumber();
  } else if (+inputUser === numberRandom){
    alert('Поздравляю, Вы угадали!!!');
    return;
  }
};

inputNumber();
}

playNumber();