document.querySelector('#testTextField').addEventListener('click',
(event) => {
    event.preventDefault();
    const userText = prompt('Введите текст')
    testTextField.textContent = userText
    console.log(userText)
    ;
})

//второй способ с использованием констант

//const testTextField = document.querySelector('#testTextField');
//testTextField.addEventListener ('click',
//    (event) => {
//                  const userText = prompt('Введите текст')
//                  testTextField.textContent = userText
//                  console.log(userText)
//                  ;
//                 })




