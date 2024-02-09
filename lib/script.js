const darkButton = document.querySelector('.dark-container');
const body = document.querySelector('body');

darkButton.addEventListener('click',() => {
    darkButton.classList.toggle('dark');
    if (darkButton.classList.contains('dark')) {
        body.style = 'background-color: #222831; color: #6c7b8b;'
    }
    else{
        body.style = 'background-color: #fff; color: black;'
    }
});