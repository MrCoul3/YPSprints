console.log('index')
const btnLogin = document.querySelector('.btn__login');
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = '/chat.html'
})
