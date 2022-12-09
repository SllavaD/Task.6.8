document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    alert('Метод для вывода сообщения в веб-консоль');
    console.log('Какое-то сообщение');
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
    console.error('Alert');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    const answer = prompt('Очистить консоль? да/нет');
    console.log('Вы ввели <'+ answer + '>. К сожалению, еще не научился так делать...');
})