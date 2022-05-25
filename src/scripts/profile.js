const buttonBack = document.querySelector('.button-back');
console.log('profile')
buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = '/chat.html'
})
