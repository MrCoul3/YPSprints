const buttonBack = document.querySelector('.button-back');
/* eslint no-console: 0 */
console.log('profile');
buttonBack.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = '/chat.html';
});
