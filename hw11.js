const field = document.getElementById('field');
const newDiv = document.createElement('div');


field.addEventListener('focus', function (event) {
    document.querySelector('body').appendChild(newDiv);
    newDiv.textContent = 'new DIV';
});


field.addEventListener('blur', function (event) {
    document.querySelector("body").removeChild(newDiv);
})