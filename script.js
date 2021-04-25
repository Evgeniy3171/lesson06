'use strict';

function playNumber(){
    let numberRandom = (Math.floor(Math.random() * 101 + 0));
    let numberAttempts = 10;

    console.log('Загаданное число: ', numberRandom);

    function inputNumber(){
      numberAttempts--;
      if (numberAttempts < 0){
        if (confirm('Попытки закончились, хотите сыграть еще?')){
          playNumber();
        } else {
          alert('До свидания');
          return;
        }
      } else {          
          let inputUser = prompt('Угадай число от 1 до 100');
          console.log(isNaN(inputUser));

          if (inputUser === null){
              alert('Игра окончена.');
              return;
          } else if (inputUser.trim() === '' || inputUser === undefined || isNaN(inputUser)){// Убирает пробелы спереди и сзади
              alert('Введите число от 0 до 100');
              inputNumber();
          } else if (+inputUser > numberRandom){
              alert('Загаданное число меньше, осталось попыток: ' + numberAttempts);
              inputNumber();
          } else if (+inputUser < numberRandom){
              alert('Загаданное число больше, осталось попыток: ' + numberAttempts);
              inputNumber();
          } else {
              if (confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?')){
                inputNumber();
              } else {
                alert('До свидания');
                return;
              }
            }  
      }
    }
    inputNumber();
}

playNumber();
