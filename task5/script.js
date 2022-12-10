const inputForm = document.querySelector('#inputForm');
const text = document.querySelector('#duplicateField');
const buttonUser = document.querySelector('#buttonUser');

inputForm.addEventListener('input',
    (event) => {
        text.textContent = inputForm.value
        ;
    });

buttonUser.addEventListener('click',
    (event) => {
        event.preventDefault()
        console.log(text.textContent)
        inputForm.value = ""
        text.textContent = ""
        ;
    })
